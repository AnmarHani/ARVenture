from fastapi import FastAPI, Request, Depends
from pydantic import BaseModel
from sqlalchemy.orm import session
from setup import engine, get_db
from typing import Optional
import models
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from fill import fill_db

app = FastAPI()

origins = ['*']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


models.Base.metadata.create_all(bind=engine)


class User(BaseModel):
    username: str
    email: str
    country:str
    password: str

    class Config:
        extra = "forbid"

class FavouriteGameTool(BaseModel):
    tool_name: str
    game_name: str
    likes: int = 0
    dislikes: int = 0

class Login(BaseModel):
    username: str
    password: str
    class Config:
        extra = "forbid"

class UpdateLikesDislikes(BaseModel):
    likes: Optional[int] = None
    dislikes: Optional[int] = None

@app.get("/fill-db")
def fill_the_database(request: Request):
    fill_db()
    return {"message": "Filled the Database!"}

@app.post("/register")
def register_user(user: User, db: session.Session = Depends(get_db)):
    db_user = models.User(username=user.username, email=user.email, password=user.password,country=user.country)
    db.add(db_user)
    db.commit()
    return {"message": "User registration successful"}

@app.post("/favourite/{user_id}")
def fav_item(user_id: int, fav: FavouriteGameTool, db: session.Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.id == user_id).first()

    if not user:
        return {"message": "Invalid user"}

    tool_name = fav.tool_name
    game_name = fav.game_name
    likes = fav.likes
    dislikes = fav.dislikes

    new_fav_item = models.FavouriteGameTool(
        tool_name=tool_name,
        game_name=game_name,
        likes=likes,
        dislikes=dislikes,
        user_id=user_id  
    )
    user.favourite_game_tools.append(new_fav_item)  
    db.add(user)  
    db.commit()
    return {"message": "Favorite item stored successfully"}


@app.post("/login")
def login_user(request: Request, login: Login, db: session.Session = Depends(get_db)):
    username = login.username
    password = login.password
    user = db.query(models.User).filter(models.User.username == username).first()

    if user and username == user.username and password == user.password:
         return {"message": "User login successful", "user_id": user.id}
    else:
        return {"message": "Invalid username or password"}

@app.get("/displayfavitem")
def display_fav_items(request: Request, db: Session = Depends(get_db)):
    from sqlalchemy import desc
    fav_items = db.query(models.FavouriteGameTool).order_by(desc(models.FavouriteGameTool.likes)).all()
    items = []
    for fav_item in fav_items:
        user = db.query(models.User).filter(models.User.id == fav_item.user_id).first()
        item = {
            "id": fav_item.id,
            "username": user.username if user else None,
            "tool_name": fav_item.tool_name,
            "game_name": fav_item.game_name,
            "likes": fav_item.likes,
            "dislikes": fav_item.dislikes
        }
        items.append(item)
    return {"items": items}

@app.get("/displayuserinfo/{user_id}")
def display_user_info(user_id: int, db: session.Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    user_data = {
        "username": user.username,
        "email": user.email
    }
    return user_data
@app.put("/favourite/{favourite_id}/likes")
def update_likes(favourite_id: int, likes_dislikes: UpdateLikesDislikes, db: session.Session = Depends(get_db)):
    favourite_item = db.query(models.FavouriteGameTool).get(favourite_id)
    if favourite_item is None:
        return {"message": "Favorite item not found"}

    if likes_dislikes.likes is not None:
        favourite_item.likes = likes_dislikes.likes

    db.commit()
    return {"message": "Likes updated successfully"}


@app.put("/favourite/{favourite_id}/dislikes")
def update_dislikes(favourite_id: int, likes_dislikes: UpdateLikesDislikes, db: session.Session = Depends(get_db)):
    
    favourite_item = db.query(models.FavouriteGameTool).get(favourite_id)
    if favourite_item is None:
        return {"message": "Favorite item not found"}

    if likes_dislikes.dislikes is not None:
        favourite_item.dislikes = likes_dislikes.dislikes

    db.commit()
    return {"message": "Dislikes updated successfully"}
    
import uvicorn


if __name__ == "__main__":
    uvicorn.run("ARapi:app", host="0.0.0.0", port=8080, log_level="info", reload=True)