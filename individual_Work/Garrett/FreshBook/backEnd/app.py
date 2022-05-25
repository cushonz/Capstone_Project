from flask import Flask
from flask_restx import Api
from models import User, Employee, Availability, PreferredOff
from exts import db
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from auth import auth_ns
from users import user_ns
from employees import employee_ns
from availability import availability_ns
from preferredOff import preferred_ns
from flask_cors import CORS

def create_app(config):
    app = Flask(__name__)
    app.config.from_object(config)

    db.init_app(app)
    CORS(app)
    migrate = Migrate(app, db)
    JWTManager(app)

    api = Api(app, doc ='/docs')

    api.add_namespace(auth_ns)
    api.add_namespace(user_ns)
    api.add_namespace(employee_ns)
    api.add_namespace(availability_ns)
    api.add_namespace(preferred_ns)

    @app.shell_context_processor
    def make_shell_context():
        return {
            "db" : db,
            "User" : User,
            "Employee" : Employee,
            "Availability" : Availability,
            "PreferredOff" : PreferredOff
        }

    return app