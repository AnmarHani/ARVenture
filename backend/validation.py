from pydantic import BaseModel
from typing import Optional

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

class UpdateLikes(BaseModel):
    likes: int


class UpdateDislikes(BaseModel):
    dislikes: int