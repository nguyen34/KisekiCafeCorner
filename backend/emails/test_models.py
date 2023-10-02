from django.test import TestCase
from .models import *


class EmailModelsTestCases(TestCase):
    def setUp(self):
        EmailMessages.objects.all().delete()

    def test_email_models(self):
        email_message = EmailMessages.objects.create(name="Test Name", email="test@email.com",
                                                     message="Test Message")
        self.assertEqual(EmailMessages.objects.count(), 1)
        self.assertEqual(email_message.name, "Test Name")
        self.assertEqual(email_message.email, "test@email.com")
        self.assertEqual(email_message.message, "Test Message")
        self.assertEqual(EmailMessages.objects.all()[0], email_message)
        self.assertEqual(EmailMessages.objects.all()[
                         0].__str__(), "Test Name - test@email.com")
