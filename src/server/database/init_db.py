import sqlite3

connection = sqlite3.connect("src/server/database/eGames.db")


with open('squema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("""INSERT INTO Usuario (nome, username, foto, biografia, data_nasc, senha, jogo_favorito, conquista) VALUES 
            ('Leonardo Felipe Salgado', 'Leo_Salgado', 'foto.png', 'Player de jogos clássicos, aqueles que meu pc consegue rodar kskssk', '2004-06-18', '', 'Super Smash Bros. Brawl', 450);""")

connection.commit()
connection.close()