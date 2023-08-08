from .models import EmailMessages
from .forms import EmailMessagesForm
from django.http import JsonResponse
from django.core.handlers.wsgi import WSGIRequest
from emails import business
import json

# Create your views here.


def send_email_to_host(request: WSGIRequest) -> JsonResponse:
    if request.method != "POST":
        return JsonResponse({"error": "Invalid request method"}, status=400)
    data = json.loads(request.body)
    form = EmailMessagesForm(data)
    if not form.is_valid():
        return JsonResponse({"error": "Invalid form data"}, status=400)
    email = data["email"]
    message = data["message"]
    name = data["name"]
    try:
        business.send_email_to_host(email, message, name)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
    form.save()
    return JsonResponse({}, status=200)
