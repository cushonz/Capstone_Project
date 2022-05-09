from sqlalchemy.orm import relationship
from FreshBook import db, login_manager
from datetime import datetime
from flask_login import UserMixin
from sqlalchemy_utils import aggregated

## If models gets modify, you need to modify the table in the db as well
## since we don't have user info (at the time of writing this) easier to recreate db

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

## this class represents a table on the database
class Buisness(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), nullable=False)

    #define how a user object is printed
    def __repr__(self):
        return f"Buisness('{self.name}')"

class Worker(db.Model, UserMixin): 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), unique=True, nullable=False)

    #define how a user object is printed
    def __repr__(self):
        return f"Worker('{self.id}','{self.name}')"

class User(db.Model, UserMixin): 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), unique=True, nullable=False)
    email = db.Column(db.String(35), nullable=False)
    password = db.Column(db.String(25), nullable=False)

    #define how a user object is printed
    def __repr__(self):
        return f"User('{self.id}','{self.name}','{self.password}', '{self.email}')"