from django.forms import ModelForm
from django import forms
from .models import EmailMessages


class EmailMessagesForm(ModelForm):

    class Meta:
        model = EmailMessages
        fields = ["name", "email", "message"]

    def clean(self):
        cleaned_data = super(EmailMessagesForm, self).clean()
        name = cleaned_data.get("name")
        email = cleaned_data.get("email")
        message = cleaned_data.get("message")

        if not name or not email or not message:
            raise forms.ValidationError("All fields are required")

        return cleaned_data
