from fastapi import FastAPI, Request, Depends
from pydantic import BaseModel
from sqlalchemy.orm import session
from Database import engine, get_db
from typing import Optional
import models

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

class User(BaseModel):
    username: str
    email: str
    password: str

class FavouriteGameTool(BaseModel):
    tool_name: str
    game_name: str
    likes: int = 0
    dislikes: int = 0

class Login(BaseModel):
    username: str
    password: str
class UpdateLikesDislikes(BaseModel):
    likes: Optional[int] = None
    dislikes: Optional[int] = None

@app.post("/register")
def register_user(user: User, db: session.Session = Depends(get_db)):
    db_user = models.User(username=user.username, email=user.email, password=user.password)
    db.add(db_user)
    db.commit()
    return {"message": "User registration successful"}

@app.post("/favourite")
def fav_item(request: Request, fav: FavouriteGameTool, db: session.Session = Depends(get_db)):
    user_id = request.headers.get("user_id")
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
    db.add(new_fav_item)
    db.commit()
    return {"message": "Favorite item stored successfully"}

@app.post("/login")
def login_user(request: Request, login: Login, db: session.Session = Depends(get_db)):
    username = login.username
    password = login.password
    user = db.query(models.User).filter(models.User.username == username).first()

    if user and username == user.username and password == user.password:
        return {"message": "User login successful"}
    else:
        return {"message": "Invalid username or password"}

@app.get("/displayfavitem")
def display_fav_items(request: Request, db: session.Session = Depends(get_db)):
    fav_items = db.query(models.FavouriteGameTool).all()
    items = []
    for fav_item in fav_items:
        item = {
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
