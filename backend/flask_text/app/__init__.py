from flask import Flask, jsonify, request, Blueprint, send_file
from config import Config
from flask_cors import CORS
from flask_mysqldb import MySQL


app = Flask(__name__)
CORS(app)
mysql = MySQL(app)
app.config.from_object(Config)


from app import routes