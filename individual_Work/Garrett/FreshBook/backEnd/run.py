# Written by Garrett Marshall
# Imports the app and runs it with the appropiate config

from app import create_app
from config import DevConfig

if __name__ == '__main__':
    app = create_app(DevConfig)
    app.run()