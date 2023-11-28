import mysql.connector
import os

ARV_API_URL = os.environ.get("BACKEND_URL")


def connect_db():
    return mysql.connector.connect(
        host=os.environ.get("DB_HOST"),
        user=os.environ.get("DB_USERNAME"),
        password=os.environ.get("DB_PASSWORD"),
        port=os.environ.get("DB_PORT"),
        database=os.environ.get("DB_NAME"),
    )
