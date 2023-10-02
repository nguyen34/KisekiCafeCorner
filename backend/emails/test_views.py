from django.test import TestCase, Client
from django.urls import reverse
from .views import *
import mock
import json


class EmailViewsTestCase(TestCase):
    def setUp(self):
        self.client = Client()

    def test_send_email(self):
        with mock.patch('emails.business.send_email_to_host', return_value={}):
            data = {'name': 'Test Name', 'email': 'test@email.com',
                    'message': 'Test Message'}
            response = self.client.post(reverse('send_email_to_host'), data=json.dumps(data),
                                        content_type='application/json')
            # TODO: Fix this test. Perhap mock send_email_to_host business function
            self.assertEqual(response.status_code, 200)
            self.assertEqual(response.json(), {})

    def test_send_email_with_invalid_email(self):
        data = {'name': 'Test Name', 'email': 'testemail.com',
                'message': 'Test Message'}
        response = self.client.post(reverse('send_email_to_host'), data=json.dumps(data),
                                    content_type='application/json')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json(), {"error": "Invalid form data"})

    def test_send_email_with_empty_fields(self):
        data = {'name': '', 'email': '', 'message': ''}
        response = self.client.post(reverse('send_email_to_host'), json.dumps(data),
                                    content_type='application/json')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json(), {"error": "Invalid form data"})
