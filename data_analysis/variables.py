import mysql.connector

ARV_API_URL = "http://localhost:8080"

def connect_db():
    return mysql.connector.connect(
        host="database",
        user="root",
        password="root",
        port=3306,
        database="arventure",
    )
