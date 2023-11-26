from fastapi import FastAPI, Request, Depends, HTTPException, status, Header
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from jose import JWTError, jwt
from datetime import datetime, timedelta
from passlib.hash import pbkdf2_sha256
import mysql.connector
from mysql.connector.cursor_cext import CMySQLCursor
from typing import Optional
import time
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
import validation
import logging
import db

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


while True:
    try:
        conn = db.connect_db()
        cursor = conn.cursor(cursor_class=CMySQLCursor)
        queries = [
            """
            CREATE TABLE IF NOT EXISTS users (
                id INT NOT NULL AUTO_INCREMENT,
                username VARCHAR(200),
                email VARCHAR(200),
                password VARCHAR(200),
                country VARCHAR(200),
                UNIQUE (username),
                PRIMARY KEY(id)
            );
            """,
            """
            CREATE TABLE IF NOT EXISTS favourite_game_tools (
                id INT NOT NULL AUTO_INCREMENT,
                tool_name VARCHAR(200),
                game_name VARCHAR(200),
                likes INT,
                dislikes INT,
                user_id INT,
                PRIMARY KEY (id),
                FOREIGN KEY(user_id) REFERENCES users(id)
            );
            """,
            """
            CREATE TABLE IF NOT EXISTS contact (
                id INT NOT NULL AUTO_INCREMENT,
                firstName VARCHAR(50),
                lastName VARCHAR(50),
                gender VARCHAR(10), 
                mobile VARCHAR(20),
                dateOfBirth DATE,
                email VARCHAR(100),
                language VARCHAR(50),
                messageBody TEXT,
                country VARCHAR(50),
                PRIMARY KEY (id)
            );
            """,
        ]

        for query in queries:
            cursor.execute(query)
        print("Database connection was successful!")
        break
    except mysql.connector.Error as error:
        print("Connecting to the database failed")
        print("Error:", error)
        time.sleep(2)


@app.get("/fill-db")
def fill_the_database(request: Request):
    from fill import fill_db

    fill_db()
    return {"message": "Filled the Database!"}


@app.delete("/delete-db")
def delete_the_database(request: Request):
    try:
        query = "DELETE FROM favourite_game_tools"
        cursor.execute(query)

        query = "DELETE FROM users"
        cursor.execute(query)

        conn.commit()

        return {"message": "Deleted everything in the database!"}
    except mysql.connector.Error as error:
        conn.rollback()
        return {"error": str(error)}


@app.post("/user/register")
def register_user(user: validation.User):
    try:
        hashed_password = pbkdf2_sha256.hash(user.password)
        query = "INSERT INTO users (username, email, password, country) VALUES (%s, %s, %s, %s)"
        values = (user.username, user.email, hashed_password, user.country)
        cursor.execute(query, values)
        conn.commit()
        return {"message": "User registration successful"}
    except mysql.connector.Error as error:
        return {"message": "User registration failed", "error": str(error)}


SECRET_KEY = "245"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


def create_access_token(*, user_id: int, username: str):
    to_encode = {"id": str(user_id), "username": username}
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


@app.post("/user/login")
def login_user(user: validation.Login):
    try:
        query = "SELECT password, id, username FROM users WHERE username = %s"
        cursor.execute(query, (user.username,))
        result = cursor.fetchone()

        if result is None:
            return {"message": "User not found"}

        stored_password_hash, user_id, username = result

        if pbkdf2_sha256.verify(user.password, stored_password_hash):
            access_token = create_access_token(user_id=user_id, username=username)
            return {
                "access_token": access_token,
                "id": str(user_id),
                "token_type": "bearer",
                "message": "Login successful",
            }
        else:
            return {"message": "Invalid password"}
    except mysql.connector.Error as error:
        return {"message": "User login failed", "error": str(error)}


@app.post("/user/send_contact")
def contact_user(contact: validation.Contact):
    try:
        query = "INSERT INTO contact (firstName, lastName, gender, mobile, dateOfBirth, email, language, messageBody, country) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
        values = (
            contact.firstName,
            contact.lastName,
            contact.gender,
            contact.mobile,
            datetime.strptime(contact.dateOfBirth, "%Y-%m-%d").strftime("%Y-%m-%d"),
            contact.email,
            contact.language,
            contact.messageBody,
            contact.country,
        )
        cursor.execute(query, values)
        conn.commit()
        return {"message": "Form sent successfully"}
    except ValueError as validation_error:
        raise HTTPException(status_code=400, detail=str(validation_error))
    except mysql.connector.Error as error:
        return {"message": "Failed to send form", "error": str(error)}


async def get_current_user(token: str = Header(None)):
    if token is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = payload.get("id")
        username = payload.get("username")
        if user_id is None or username is None:
            raise credentials_exception
        return {"id": user_id, "username": username}
    except JWTError:
        raise credentials_exception


@app.get("/items")
def get_all_items():
    try:
        query = """
        SELECT f.id, u.username, f.tool_name, f.game_name, f.likes, f.dislikes
        FROM favourite_game_tools AS f
        INNER JOIN users AS u ON f.user_id = u.id
        """
        cursor.execute(query)
        results = cursor.fetchall()

        items = []
        for result in results:
            item = {
                "id": result[0],
                "username": result[1],
                "tool_name": result[2],
                "game_name": result[3],
                "likes": result[4],
                "dislikes": result[5],
            }
            items.append(item)

        return {"items": items}
    except mysql.connector.Error as error:
        return {"message": "Failed to retrieve items", "error": str(error)}


@app.post("/items/create")
def create_item_by_token(
    request_body: validation.FavouriteGameTool,
    current_user: dict = Depends(get_current_user),
):
    user_id = current_user.get("id")

    cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))
    user = cursor.fetchone()

    if not user:
        return {"message": "Invalid user"}

    query = """
    INSERT INTO favourite_game_tools (tool_name, game_name, likes, dislikes, user_id)
    VALUES (%s, %s, %s, %s, %s)
    """
    values = (
        request_body.tool_name,
        request_body.game_name,
        request_body.likes,
        request_body.dislikes,
        user_id,
    )
    cursor.execute(query, values)
    conn.commit()

    return {"message": "Favorite item stored successfully"}


@app.put("/items/like/{id}")
def update_likes(id: int, item: validation.UpdateLikes):
    updated_likes = item.likes
    try:
        check_query = "SELECT id FROM favourite_game_tools WHERE id = %s"
        cursor.execute(check_query, (id,))
        result = cursor.fetchone()

        if result is None:
            return {"message": "Item not found"}

        update_query = "UPDATE favourite_game_tools SET likes = %s WHERE id = %s"
        cursor.execute(update_query, (updated_likes, id))
        conn.commit()

        return {"message": "Likes updated successfully"}
    except mysql.connector.Error as error:
        return {"message": "Failed to update likes", "error": str(error)}


@app.put("/items/dislike/{id}")
def update_dislikes(id: int, item: validation.UpdateDislikes):
    updated_dislikes = item.dislikes
    try:
        check_query = "SELECT id FROM favourite_game_tools WHERE id = %s"
        cursor.execute(check_query, (id,))
        result = cursor.fetchone()

        if result is None:
            return {"message": "Item not found"}

        update_query = "UPDATE favourite_game_tools SET dislikes = %s WHERE id = %s"
        cursor.execute(update_query, (updated_dislikes, id))
        conn.commit()

        return {"message": "Dislikes updated successfully"}
    except mysql.connector.Error as error:
        return {"message": "Failed to update dislikes", "error": str(error)}


if __name__ == "__main__":
    uvicorn.run("ARapi:app", host="0.0.0.0", port=8080, log_level="info", reload=True)
