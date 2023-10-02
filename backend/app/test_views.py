from django.test import TestCase, Client
from django.urls import reverse
from .views import *


class AppViewsTestCase(TestCase):
    def setUp(self):
        self.client = Client()

    def test_csrf(self):
        response = self.client.get(reverse('csrf'))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {})

    def test_ping(self):
        response = self.client.get(reverse('ping'))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {'result': 'OK'})
