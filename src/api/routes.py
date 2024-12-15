"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('register', methods=['POST'])
def handle_register():
    data = request.json
    user_name = data.get('user_name')
    email = data.get('email')
    password = data.get('password')
    is_active = data.get('is_active', True)

    if not user_name or not email or not password:
        return jsonify({"msg" : "Por favor rellene todos los campos"}), 400
    
    if "@" not in email or "." not in email:
        return jsonify({"msg": "Por favor introduzca un correo válido"}), 400
    
    
    
    user_existente = User.query.filter((User.user_name == user_name) | (User.email == email)).first()
    if user_existente:
        return jsonify({"msg": "El correo ya está registrado"}), 400
    
    new_user = User(user_name=user_name, email=email, password=password, is_active=is_active)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"ok" : user_name}), 200

@api.route('/login', methods=['POST'])
def handle_login():
    data = request.json
    user_name = data.get('user_name')
    password = data.get('password')
    if not user_name or not password:
        return jsonify({"msg" : "El usuario y el password son requeridos"}), 400
    
    user = User.query.filter_by(user_name=user_name, password=password).first()
    if not user:
        return jsonify({"msg" : "no existe ese usuario"})
    
    token = create_access_token(identity=user.user_name)
    return jsonify({"token" : token })

@api.route('/private', methods=['POST'])
@jwt_required()
def private():
    current_user = get_jwt_identity()
    return jsonify({"ok" : True , "current_user" : current_user}), 200