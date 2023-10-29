from sqlalchemy import Column, Integer, String, ForeignKey
from Database import Base
from sqlalchemy.orm import relationship
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    username = Column(String)
    email = Column(String)
    password = Column(String)
    favourite_game_tools = relationship("FavouriteGameTool", back_populates="user")

class FavouriteGameTool(Base):
    __tablename__ = "favourite_game_tools"

    id = Column(Integer, primary_key=True)
    tool_name = Column(String)
    game_name = Column(String)
    likes = Column(Integer)
    dislikes = Column(Integer)
    user_id = Column(Integer, ForeignKey('users.id'))
    user = relationship("User", back_populates="favourite_game_tools")