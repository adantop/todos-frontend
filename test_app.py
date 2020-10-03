#!/usr/bin/python3

import app
import json
import pytest


@pytest.fixture
def client():
    app.app.config['TESTING'] = True
    with app.app.test_client() as client:
        yield client


def test_get_todos(client):
    rv = client.get('/')
    assert rv.status_code == 200
