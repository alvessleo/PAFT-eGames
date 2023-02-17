import sqlite3
import hashlib
import datetime
import json
from random import randint

def get_db_connection():
    conn = sqlite3.connect('database/eGames.db')
    conn.row_factory = sqlite3.Row
    return conn

#Funções de login e logout

def is_login(session):
    conn = get_db_connection()
    login = conn.execute(f'SELECT * FROM logged WHERE idSession = {session}').fetchall()
    conn.close()
    return {'login': login[0]}

def login(email, senha):
    f_senha = hashlib.sha1(senha.encode('utf-8')).hexdigest()

    conn = get_db_connection()
    usuarios = conn.execute('SELECT * FROM Usuario').fetchall()
    conn.close()
    for user in usuarios:
        if user['email'] == email:
            if user['senha'] == f_senha:
                session = str(randint(0,100))+str(randint(0,100))+str(randint(0,100))
                conn = get_db_connection()
                cur = conn.cursor()
                cur.execute(f"UPDATE logged SET login = 'True', idUser = {user['id']}, idSession = {session}")
                conn.commit()
                conn.close()
                return {"sucess": True, "message": "Login sucedido"}
            else:
                return {"sucess": False, "message": "Senha inválida"}
    return {"sucess": False, "message": "Usuário não encontrado"}

def logout(session):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(f"DELETE FROM logged WHERE idSession = {session}")
    conn.commit()
    conn.close()
    return {"sucess": True, "message": "Logout sucedido"}

#Funções de perfil do usuário
def new_user(nome, username, data_nasc, senha):
    conn = get_db_connection()
    usernames = conn.execute('SELECT username FROM Usuario').fetchall()
    conn.close()
    for name in usernames:
        if name == username:
            return {"sucess": False, "message": "Este username já esta sendo usado"}
    #EDITE AQUI - Validação data de nascimento com datetime()
    hash_senha = hashlib.sha1(senha.encode('utf-8')).hexdigest()
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(f"INSERT INTO Usuario (nome, username, data_nasc, senha) VALUES ('{nome}', '{username}', '{data_nasc}', '{hash_senha}');")
    conn.commit()
    conn.close()
    {"sucess": True, "message": "Cadastro sucedido"}

#Funções de postagem e comentário

#Funções de grupo
