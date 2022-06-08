# Written by Garrett Marshall
# Declares initializes the app, declares config details, instantiates the back end api, final app state is returned

from flask import Flask
from flask_restx import Api
from models import User, Employee, Availability, PreferredOff, Schedule
from exts import db
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from schedule import schedule_ns
from auth import auth_ns
from users import user_ns
from employees import employee_ns
from availability import availability_ns
from preferredOff import preferred_ns
import os

def create_app(config):
    basedir = os.path.abspath(os.path.dirname(__file__))
    app = Flask(__name__)
    app.config.from_object(config)
    app.config['SQLALCHEMY_DATABASE_URI'] =\
        'sqlite:///' + os.path.join(basedir, 'dev.db')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)

    migrate = Migrate(app, db)
    JWTManager(app)

    api = Api(app, doc ='/docs')

    api.add_namespace(auth_ns)
    api.add_namespace(user_ns)
    api.add_namespace(employee_ns)
    api.add_namespace(availability_ns)
    api.add_namespace(preferred_ns)
    api.add_namespace(schedule_ns)

    @app.shell_context_processor
    def make_shell_context():
        return {
            "db" : db,
            "User" : User,
            "Employee" : Employee,
            "Availability" : Availability,
            "PreferredOff" : PreferredOff,
            "Schedule" : Schedule
        }
    
    return app