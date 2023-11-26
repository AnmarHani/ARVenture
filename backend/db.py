import mysql.connector


def connect_db():
    return mysql.connector.connect(
        host="database",
        user="root",
        password="root",
        port=3306,
        database="arventure",
    )
