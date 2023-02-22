import sqlite3
import hashlib
import datetime
import json
from random import randint

def get_db_connection():
    conn = sqlite3.connect("src/server/database/eGames.db")
    conn.row_factory = sqlite3.Row
    return conn

#Funções de login e logout

def is_login(session):
    conn = get_db_connection()
    login = conn.execute(f'SELECT * FROM session WHERE idSession = {session}').fetchall()
    conn.close()
    return {'login': login[0]}

def login(username, senha):
    f_senha = hashlib.sha1(senha.encode('utf-8')).hexdigest()

    conn = get_db_connection()
    usuarios = conn.execute('SELECT * FROM Usuario').fetchall()
    conn.close()
    for user in usuarios:
        if user['username'] == username:
            if user['senha'] == f_senha:
                session = str(randint(0,100))+str(randint(0,100))+str(randint(0,100))
                conn = get_db_connection()
                cur = conn.cursor()
                cur.execute(f"INSERT INTO session values ({session}, {user['idUsuario']}, 'True');")
                conn.commit()
                conn.close()
                return {"sucess": True, "message": "Login sucedido", "sessionId": session}
            else:
                return {"sucess": False, "error": 2, "message": "Senha inválida"}
    return {"sucess": False, "error": 1, "message": "Usuário não encontrado"}

def logout(session):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(f"DELETE FROM session WHERE idSession = {session}")
    conn.commit()
    conn.close()
    return {"sucess": True, "message": "Logout sucedido"}

#Funções de perfil do usuário
def new_user(nome, username, data_nasc, senha):
    conn = get_db_connection()
    usernames = conn.execute('SELECT username FROM Usuario').fetchall()
    conn.close()
    for name in usernames:
        if name['username'] == username:
            return {"sucess": False, "error": 1,"message": "Este username já esta sendo usado"}
    #EDITE AQUI - Validação data de nascimento com datetime()
    hash_senha = hashlib.sha1(senha.encode('utf-8')).hexdigest()
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(f"INSERT INTO Usuario (nome, username, foto, data_nasc, senha, conquista) VALUES ('{nome}', '{username}', 'foto.png','{data_nasc}', '{hash_senha}', 0);")
    conn.commit()
    conn.close()
    return {"sucess": True, "message": "Cadastro sucedido"}


def get_all_users():
    conn = get_db_connection()
    usuariosQuery = conn.execute(f'SELECT * FROM usuario')
    for usuario in usuariosQuery:
        print(usuario[0], usuario[1], usuario[2], usuario[3], usuario[4], usuario[5], usuario[6])
    return "oi"


def get_user_by_session(session):
    conn = get_db_connection()
    sessao = conn.execute(f'SELECT * FROM session WHERE idSession = {session}').fetchall()
    idUsuario = sessao[0]['idUser']
    usuario = conn.execute(f'SELECT * FROM usuario WHERE idUsuario = {idUsuario}').fetchall()
    conn.commit()
    conn.close()
    return {"usuario": {
                        'nome' : usuario[0]['nome'],
                        'username' : usuario[0]['username'],
                        'foto' : usuario[0]['foto'],
                        'biografia' : usuario[0]['biografia'],
                        'data_nasc' : usuario[0]['data_nasc'],
                        'jogo_favorito' : usuario[0]['jogo_favorito'],
                        'conquista' : usuario[0]['conquista'],
                        }}

def edit_user(nome, username, data_nasc, bio, jogo_favorito, session): 
    conn = get_db_connection()
    sessao = conn.execute(f'SELECT * FROM session WHERE idSession = {session}').fetchall()
    idUsuario = sessao[0]['idUser']
    cur = conn.cursor()
    cur.execute(f"UPDATE Usuario SET nome='{nome}', username='{username}', data_nasc='{data_nasc}', biografia='{bio}', jogo_favorito='{jogo_favorito}' WHERE idUsuario={idUsuario};")
    conn.commit()
    conn.close()
    return {"sucess": True, "message": "Informações alteradas"}
                   



#Funções de postagem e comentário

#Funções de grupo

#Função de API
popularGames = [
    {"name": "League of Legends", "rating": 76, "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co49wj.png", "genres": ["RPG", "Strategy", "MOBA"]},
    {"name": "Minecraft", "rating": 84, "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co49x5.jpg", "genres": ["Adventure", "Simulator"]},
    {"name": "World of Warcraft", "rating": 85, "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co2l7z.jpg", "genres": ["RPG", "Adventure"]},
    {"name": "Counter-Strike: Global Offensive", "rating": 82, "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co610k.jpg", "genres": ["Shooter", "Tactical"]},
    {"name": "Fortnite", "rating": 69, "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co2ekt.jpg", "genres": ["RPG", "Strategy", "Shooter", "Adventure"]},
    {"name": "PUBG: BATTLEGROUNDS", "rating": 73, "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co4c1x.jpg", "genres": ["Shooter"]},
    {"name": "Apex Legends", "rating": 77, "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wzo.jpg", "genres": ["Shooter"]},
    {"name": "VALORANT", "rating": 72, "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co2mvt.jpg", "genres": ["Shooter", "Tactical"]},
    {"name": "Call of Duty: Warzone", "rating": 72, "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co20o8.jpg", "genres": ["Shooter"]},
    {"name": "FIFA 22", "rating": 77, "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co3dsm.jpg", "genres": ["Simulator", "Sport"]}
]

def getPopularGames():
    return popularGames
