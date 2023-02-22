import query as db
from flask_cors import CORS
from flask import Flask, jsonify, request

app = Flask(__name__)
cors = CORS(app, origins=["*"])

#Funções de login e logout

@app.route('/getSession/<int:session>', methods=['GET'])
def is_logged(session):
    login = db.is_login(session)
    return {'login': login}, 200

@app.route('/login', methods=['POST'])
def login():
    username = request.json['username']
    senha = request.json['senha']
    login = db.login(username, senha)
    return jsonify(login)

@app.route('/logout/<int:session>', methods=['DELETE'])
def logout(session):
    logout = db.logout(session)
    return jsonify(logout)

#Funções de perfil do usuário

@app.route('/new-user', methods=['POST'])
def cadastro():
    name = request.json['name']
    username = request.json['username']
    data_nasc = request.json['data_nasc']
    senha = request.json['senha']
    result = db.new_user(name, username, data_nasc, senha)
    response = jsonify(result)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/get-all-users', methods=['GET'])
def recuperarTodosUsuarios():
    usuarios = db.get_all_users()
    return "oi"


@app.route('/get-user-by-session/<int:session>', methods=['GET'])
def usuarioDaSessao(session):
    usuarioDaSessao = db.get_user_by_session(session)
    return jsonify(usuarioDaSessao)


@app.route('/edit-user/<int:session>', methods=['PUT'])
def editarUsuario(session):
    nome = request.json['name']
    username = request.json['username']
    data_nasc = request.json['data_nasc']
    bio = request.json['bio']
    jogo_favorito = request.json['jogo_favorito']
    result = db.edit_user(nome, username, data_nasc, bio, jogo_favorito, session)
    response = jsonify(result)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

app.run(debug=True)
