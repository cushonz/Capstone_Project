import secrets
import os
from flask import Flask, render_template, url_for, request, flash, redirect, session
from FreshBook import app, db, bcrypt
from FreshBook.forms import LoginForm, RegistrationForm, UpdateAccountForm
from FreshBook.models import Buisness, Worker, User
from flask_login import login_user, current_user, logout_user

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')

@app.route("/login",methods=['GET','POST'])
def login():
    # a logged in user doesnt need access to the login or register page
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()

        #login if user with inputted username and password exist in db
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user, remember=form.remember.data)
            print('login Successful')
            return redirect(url_for('home'))
        else:
            print('Failed login')
    return render_template('login-page.html', form=form)

@app.route("/register",methods=['GET','POST'])
def register():
     # a logged in user doesnt need access to the login or register page
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    
    form = RegistrationForm()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(username=form.username.data, password=hashed_password, email=form.email.data)
        db.session.add(user)
        db.session.commit()
        print("account created you can now log in") # layouts dont show a success atm
        return redirect(url_for('login'))
    return render_template('register.html', form=form)