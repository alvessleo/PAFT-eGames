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
                                    



#Funções de postagem e comentário

#Funções de grupo
