from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed
from flask_login import current_user
from wtforms import StringField, PasswordField, SubmitField, BooleanField, RadioField, TextAreaField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError
from FreshBook.models import User


class RegistrationForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email(), Length(min=5, max=35)])
    password = PasswordField('Password', validators=[DataRequired(), Length(min=8, max=25)])
    confirm_password = PasswordField('Confirm_Password', validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField('Sign Up')

    ## Custom validation to prevent user from creating an account with already used e-mail
    def validate_email(self, email):
        email = User.query.filter_by(email=email.data).first()
        if email:
            raise ValidationError('Email is already being used.')

    # Need to write a validate password check

class LoginForm(FlaskForm):
    password = PasswordField('Password', validators=[DataRequired(), Length(min=8, max=25)])
    remember = BooleanField('Remember Me')
    submit = SubmitField('Login')

# for updating account info
class UpdateAccountForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email(), Length(min=5, max=35)])
    submit = SubmitField('Update')
    
    def validate_email(self, email):
        if email.data != current_user.email:
            email = User.query.filter_by(email=email.data).first()
            if email:
                raise ValidationError('Email is already being used.')

