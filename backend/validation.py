from pydantic import BaseModel, Field
from typing import Optional


class User(BaseModel):
    username: str
    email: str
    country: str
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


class Contact(BaseModel):
    firstName: str = Field(
        ...,
        min_length=3,
        max_length=50,
        description="First name should have 2-50 characters",
    )
    lastName: str = Field(
        ...,
        min_length=3,
        max_length=50,
        description="Last name should have 2-50 characters",
    )
    gender: str
    mobile: str = Field(
        ...,
        min_length=10,
        max_length=20,
        description="Mobile number should have 10-20 characters",
    )
    dateOfBirth: Optional[str]
    email: str = Field(
        ...,
        min_length=6,
        max_length=100,
        description="Email should have 5-100 characters",
    )
    language: str = Field(
        ...,
        min_length=2,
        max_length=50,
        description="Language should have 2-50 characters",
    )
    messageBody: str
    country: str = Field(
        ...,
        min_length=2,
        max_length=50,
        description="Country should have 2-50 characters",
    )
