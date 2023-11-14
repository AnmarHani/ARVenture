from setup import engine, get_single_db
import models

def fill_db():
    db = get_single_db()
    for i in range(1, 100):
        if i > 25:
            db_user = models.User(username=f"User {i}", password=f"wasd1234", email=f"User{i}@gmail.com", country="United States")
            db.add(db_user)
            db.commit()
            db_tool = models.FavouriteGameTool(tool_name=f"Tool {i}", game_name=f"DBD", likes=0, dislikes=20*i, user_id=i+1)
            db.add(db_tool)
            db.commit()
        if i > 50:
            db_user = models.User(username=f"User {i}", password=f"wasd1234", email=f"User{i}@gmail.com", country="Germany")
            db.add(db_user)
            db.commit()
            db_tool = models.FavouriteGameTool(tool_name=f"Tool {i}", game_name=f"No Man's Sky", likes=100*i, dislikes=0, user_id=i+1)
            db.add(db_tool)
            db.commit()
        if i > 75:
            db_user = models.User(username=f"User {i}", password=f"wasd1234", email=f"User{i}@gmail.com", country="United Kingdom")
            db.add(db_user)
            db.commit()
            db_tool = models.FavouriteGameTool(tool_name=f"Tool {i}", game_name=f"Fifa {i}", likes=10+i, dislikes=i, user_id=i+1)
            db.add(db_tool)
            db.commit()

        db_user = models.User(username=f"User {i}", password=f"wasd1234", email=f"User{i}@gmail.com", country="Saudi Arabia")
        db.add(db_user)
        db.commit()

        db_tool = models.FavouriteGameTool(tool_name=f"Tool {i}", game_name=f"Minecraft", likes=i, dislikes=i, user_id=i+1)
        db.add(db_tool)
        db.commit()



        