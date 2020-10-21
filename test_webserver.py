#!/usr/bin/python3

import webserver
import json
import pytest


@pytest.fixture
def client():
    webserver.app.config['TESTING'] = True
    with webserver.app.test_client() as client:
        yield client


def test_get_todos(client):
    rv = client.get('/')
    assert rv.status_code == 200
