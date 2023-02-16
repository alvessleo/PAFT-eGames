import sqlite3

connection = sqlite3.connect('database.db')


with open('database/squema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

#EDITE AQUI - Primeiros inserts para preencher o banco de dados

connection.commit()
connection.close()