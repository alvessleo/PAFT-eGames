import query as db
from flask_cors import CORS
from flask import Flask, jsonify, request

app = Flask(__name__)
cors = CORS(app, origins=["*"])

# EDITE AQUI - Urls para as requisições fetch/ajax

app.run(debug=True)
