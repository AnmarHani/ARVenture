from faker import Faker
import mysql.connector
from mysql.connector.cursor_cext import CMySQLCursor
from passlib.hash import pbkdf2_sha256
from validation import User, FavouriteGameTool
import time

fake = Faker()


def fill_db():
    try:
        conn = mysql.connector.connect(
            host="database",
            user="root",
            password="root",
            port=3306,
            database="arventure",
        )
        cursor = conn.cursor(cursor_class=CMySQLCursor)
        print("Database connection was successful!")
    except mysql.connector.Error as error:
        print("Connecting to the database failed")
        print("Error:", error)
        return

    for i in range(1, 100):
        if i > 25:
            # Create a fake user
            username = fake.user_name()
            email = fake.email()
            country = fake.country()
            password_hash = pbkdf2_sha256.hash("wasd1234")

            # Validate and create a User instance
            user = User(
                username=username, email=email, country=country, password=password_hash
            )
            user_dict = user.dict()

            query = """
            INSERT INTO users (username, email, country, password)
            VALUES (%s, %s, %s, %s)
            """
            values = (
                user_dict["username"],
                user_dict["email"],
                user_dict["country"],
                user_dict["password"],
            )
            cursor.execute(query, values)
            conn.commit()

            user_id = cursor.lastrowid

            game_names = ["DBD", "Minecraft", "FIFA", "No Man's Sky"]

            game_name = fake.random_element(game_names)

            #
            tool_name = fake.word()
            dislikes = 20 * i

            game_tool = FavouriteGameTool(
                tool_name=tool_name, game_name=game_name, dislikes=dislikes
            )
            game_tool_dict = game_tool.dict()

            query = """
            INSERT INTO favourite_game_tools (user_id, tool_name, game_name, likes, dislikes)
            VALUES (%s, %s, %s, %s, %s)
            """
            values = (
                user_id,
                game_tool_dict["tool_name"],
                game_tool_dict["game_name"],
                game_tool_dict["likes"],
                game_tool_dict["dislikes"],
            )
            cursor.execute(query, values)
            conn.commit()
