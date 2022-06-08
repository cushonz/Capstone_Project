from enum import unique
from sqlalchemy import nullslast
from exts import db

class User(db.Model):
    id = db.Column(db.Integer(), nullable = False, primary_key = True)
    email = db.Column(db.String(), nullable = False, unique = True)
    password = db.Column(db.String(), nullable = False)

    def __repr__(self):
        return f"<User {self.email} >"

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()
    
    def update(self, email, password):
        self.email = email
        self.password = password
        db.session.commit()
    
class Employee(db.Model):
    id = db.Column(db.Integer(), nullable = False, primary_key = True)
    firstName = db.Column(db.String(), nullable = False)
    lastName = db.Column(db.String(), nullable = False)
    profRank = db.Column(db.Integer(), nullable = False)

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()
    
    def update(self, firstName, lastName, profRank):
        self.firstName = firstName
        self.lastName = lastName
        self.profRank = profRank
        db.session.commit()

class Availability(db.Model):
    empId = db.Column(db.Integer(), db.ForeignKey(Employee.id))
    availId = db.Column(db.Integer(), primary_key = True)
    startTime = db.Column(db.String(), nullable = False)
    endTime = db.Column(db.String(), nullable = False)
    day = db.Column(db.String(), nullable = False)

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()
    
    def update(self, startTime, endTime, day):
        self.startTime = startTime
        self.endTime = endTime
        self.day = day
        db.session.commit()
   
class PreferredOff(db.Model):
    empId = db.Column(db.Integer(), db.ForeignKey(Employee.id))
    prefId = db.Column(db.Integer(), primary_key = True)
    startTime = db.Column(db.String(), nullable = False)
    endTime = db.Column(db.String(), nullable = False)
    day = db.Column(db.String(), nullable = False)

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()
    
    def update(self, startTime, endTime, day):
        self.startTime = startTime
        self.endTime = endTime
        self.day = day
        db.session.commit()

class Schedule(db.Model):
    empId = db.Column(db.Integer(), db.ForeignKey(Employee.id), nullable = False)
    id = db.Column(db.Integer(), primary_key = True)
    startTime = db.Column(db.String(), nullable = False)
    endTime = db.Column(db.String(), nullable = False)
    day = db.Column(db.String(), nullable = False)

    def __init__(self, startTime, endTime, day) -> None:
        super().__init__()
        self.startTime = startTime
        self.endTime = endTime
        self.day = day
        self.empId = self.id

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()
    
    def update(self, startTime, endTime, day):
        self.startTime = startTime
        self.endTime = endTime
        self.day = day
        db.session.commit()

