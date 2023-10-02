from django.test import TestCase, Client
from django.urls import reverse
from .views import *
import json


class LandingViewsTestCase(TestCase):
    def setUp(self):
        self.client = Client()

    def test_redux_django(self):
        response = self.client.get(reverse('test_redux_django'))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {
                         "message": "Hello, world. You're at the landing index."})
