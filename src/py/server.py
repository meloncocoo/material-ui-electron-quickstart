# coding: utf-8
from flask import Flask
from flask_cors import cross_origin

app = Flask(__name__)

@app.route('/')
@cross_origin()
def hello_world():
    return 'Hello World!'
    
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5001)
