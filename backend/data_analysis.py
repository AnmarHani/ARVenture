import pandas as pd
import numpy as np
from sqlalchemy import create_engine
import matplotlib.pyplot as plt

engine = create_engine("sqlite:///./models.db")

users_query = "SELECT * FROM users"
favourite_game_tools_query = "SELECT * FROM favourite_game_tools"

users_df = pd.read_sql(users_query, engine)
favourite_game_tools_df = pd.read_sql(favourite_game_tools_query, engine)

average_likes = favourite_game_tools_df.groupby('tool_name')['likes'].mean()
average_dislikes = favourite_game_tools_df.groupby('tool_name')['dislikes'].mean()

plt.figure(figsize=(10, 6))
average_likes.plot(kind='bar')
plt.title('Average Likes for Game Tools')
plt.xlabel('Tool Name')
plt.ylabel('Average Likes')
plt.xticks(rotation=45)
plt.show()

plt.figure(figsize=(10, 6))
average_dislikes.plot(kind='bar')
plt.title('Average Dislikes for Game Tools')
plt.xlabel('Tool Name')
plt.ylabel('Average Dislikes')
plt.xticks(rotation=45)
plt.show()

engine.dispose()