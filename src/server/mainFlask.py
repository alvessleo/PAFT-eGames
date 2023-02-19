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

@app.route('/logout/<int:session>', methods=['GET'])
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
    return jsonify(result)

app.run(debug=True)
