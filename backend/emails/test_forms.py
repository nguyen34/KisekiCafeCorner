from django.test import TestCase
from .forms import *


class EmailFormsTestCase(TestCase):
    def setUp(self):
        EmailMessages.objects.all().delete()

    def test_email_form_is_valid(self):
        form_data = EmailMessagesForm(
            data={"name": "Test Name", "email": "test@email.com",
                  "message": "Test Message"})
        self.assertTrue(form_data.is_valid())

    def test_email_form_is_not_valid(self):
        form_data = EmailMessagesForm(
            data={"name": "Test Name", "email": "testemail.com",
                  "message": "Test Message"})
        self.assertFalse(form_data.is_valid())

    def test_email_form_is_not_valid_with_empty_fields(self):
        form_data = EmailMessagesForm(
            data={"name": "", "email": "", "message": ""})
        self.assertFalse(form_data.is_valid())

    def test_email_form_is_not_valid_with_empty_name(self):
        form_data = EmailMessagesForm(
            data={"name": "", "email": "testemail.com",
                  "message": "Test Message"})
        self.assertFalse(form_data.is_valid())

    def test_email_form_is_not_valid_with_empty_email(self):
        form_data = EmailMessagesForm(
            data={"name": "Test Name", "email": "",
                  "message": "Test Message"})
        self.assertFalse(form_data.is_valid())

    def test_email_form_is_not_valid_with_empty_message(self):
        form_data = EmailMessagesForm(
            data={"name": "Test Name", "email": "testemail.com",
                  "message": ""})
        self.assertFalse(form_data.is_valid())

    def test_email_form_is_not_valid_with_empty_name_and_email(self):
        form_data = EmailMessagesForm(
            data={"name": "", "email": "",
                  "message": "Test Message"})
        self.assertFalse(form_data.is_valid())
