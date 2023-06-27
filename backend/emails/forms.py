from django.forms import ModelForm
from django import forms
from .models import EmailMessages
from .business import validate_email


class EmailMessagesForm(ModelForm):

    class Meta:
        model = EmailMessages
        fields = ["name", "email", "message"]

    def clean(self):
        cleaned_data = super(EmailMessagesForm, self).clean()
        name = cleaned_data.get("name")
        email = cleaned_data.get("email")
        message = cleaned_data.get("message")

        valid_email = validate_email(email)

        if not name or not email or not message:
            raise forms.ValidationError("All fields are required")

        if not valid_email:
            raise forms.ValidationError("Invalid email address")

        return cleaned_data
