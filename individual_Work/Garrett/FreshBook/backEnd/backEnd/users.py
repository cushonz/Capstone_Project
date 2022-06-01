from flask import request
from flask_restx import Namespace, Resource, fields
from flask_jwt_extended import jwt_required
from models import User

user_ns = Namespace('user', description = "A namespace for users")

user_model = user_ns.model(
    "User",
    {
        "id" : fields.Integer(),
        "email" : fields.String(),
        "password" : fields.String()
    }
)

@user_ns.route('/users')
class UsersResource(Resource):
    @user_ns.marshal_list_with(user_model)
    def get(self):
        """Get all users from DB"""

        users = User.query.all()

        return users

    @user_ns.marshal_with(user_model)
    def post(self):
        """Create a new user"""
            
        data = request.get_json()
        new_user = User(
            email = data.get('email'),
            password = data.get('password')
        )
        new_user.save()
            
        return new_user, 201

@user_ns.route('/user/<int:id>')
class UserResource(Resource):
    @user_ns.marshal_with(user_model)
    def get(self, id):
        """Get a user by id"""

        user = User.query.get_or_404(id)
            
        return user

    @user_ns.marshal_with(user_model)
    def put(self, id):
        """Update a user by id"""
            
        user_to_update = User.query.get_or_404(id)
        data = request.get_json()
        user_to_update.update(data.get('email'), data.get('password'))
            
        return user_to_update

    @user_ns.marshal_with(user_model)
    def delete(self, id):
        """Deletes a user by id"""
            
        user_to_delete = User.query.get_or_404(id)
        user_to_delete.delete()

        return user_to_delete