import sqlite3

connection = sqlite3.connect('eGames.db')


with open('squema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("""INSERT INTO Usuario (nome, username, biografia, data_nasc, senha, jogo_favorito, conquista) VALUES 
            ('Leonardo Felipe Salgado', 'Leo_Salgado', 'Player de jogos clássicos, aqueles que meu pc consegue rodar kskssk', '2004-6-18', '8fe15b78f0c4e515db19e72585efb585e8614158', 'Super Smash Bros. Brawl', 450);""")

connection.commit()
connection.close()