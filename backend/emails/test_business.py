from django.test import TestCase
from .business import *
from .models import *


class EmailBusinessTestCase(TestCase):
    def setUp(self):
        EmailMessages.objects.all().delete()

    def test_validate_email(self):
        valid_email = validate_email("test@email.com")
        self.assertTrue(valid_email)

    def test_validate_email_with_invalid_email(self):
        valid_email = validate_email("testemail.com")
        self.assertFalse(valid_email)

    def test_validate_email_with_empty_email(self):
        valid_email = validate_email("")
        self.assertFalse(valid_email)

    def test_validate_email_with_none_email(self):
        valid_email = validate_email(None)
        self.assertFalse(valid_email)
