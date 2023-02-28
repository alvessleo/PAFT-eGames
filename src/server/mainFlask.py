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
    profileImg = request.json['img']
    result = db.edit_user(nome, username, data_nasc, bio, jogo_favorito, session, profileImg)
    response = jsonify(result)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

#Função de post
@app.route('/new-post', methods=['POST'])
def newPost():
    title = request.json['title']
    img = request.json['img']
    idUser = request.json['idUser']
    result = db.new_post(title, img, idUser)
    return result

@app.route('/get-posts', methods=['GET'])
def getPosts():
    post_list = db.get_posts()
    return post_list

@app.route('/like-post/<int:idPost>', methods=['GET'])
def likePost(idPost):
    result = db.likePost(idPost)
    return result

@app.route('/comment-post/<int:idPost>', methods=['POST'])
def commentPost(idPost):
    comment = request.json['comment']
    idUser = request.json['idUser']
    result = db.commentPost(idPost, comment, idUser)
    return result

@app.route('/get-my-posts/<int:idUser>', methods=['GET'])
def getMyPosts(idUser):
    post_list = db.get_my_posts(idUser)
    return post_list

#Função de API
@app.route('/get-popular-games', methods=['GET'])
def getPopularGames():
    popularGames = db.getPopularGames()
    return jsonify(popularGames)

@app.route('/get-feed-games', methods=['GET'])
def getFeedGames():
    feedGames = db.getFeedGames()
    return jsonify(feedGames)


#Funções de Grupo
@app.route('/new-group', methods=['POST'])
def newGroup():
    name = request.json['name']
    description = request.json['description']
    type = request.json['type']
    img = request.json['img']
    result = db.new_group(name, description, type, img)
    response = jsonify(result)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/get-all-groups', methods=['GET'])
def getAllGroups():
    grupos = db.get_all_groups()
    return grupos


@app.route('/get-group/<int:idgrupo>', methods=['GET'])
def getGroup(idgrupo):
    grupo = db.get_group(idgrupo)
    return grupo


# Funções usuário-grupo
@app.route('/join-group', methods=['POST'])
def joinGroup():
    idusuario = request.json['idusuario']
    idgrupo = request.json['idgrupo']
    join = db.join_group(idusuario, idgrupo)
    return jsonify(join)


@app.route('/leave-group', methods=['POST'])
def leaveGroup():
    idusuario = request.json['idusuario']
    idgrupo = request.json['idgrupo']
    leave = db.leave_group(idusuario, idgrupo)
    return jsonify(leave)


@app.route('/user-in-group', methods=['POST'])
def userInGroup():
    idusuario = request.json['idusuario']
    idgrupo = request.json['idgrupo']
    userInGroup = db.user_in_group(idusuario, idgrupo)
    return jsonify(userInGroup)


@app.route('/get-my-groups/<int:idUser>', methods=['GET'])
def getMyGroups(idUser):
    group_list = db.get_my_groups(idUser)
    return group_list



app.run(debug=True)
