#!/usr/bin/python3

from flask import Flask, render_template


app = Flask(__name__, static_url_path='', static_folder='www', template_folder='www')


@app.route('/', methods=['GET'])
def get_accounts():
    return render_template('index.html')


if __name__ == '__main__':
    app.run('0.0.0.0')
