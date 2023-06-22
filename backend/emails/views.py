from django.shortcuts import render
from django.http import JsonResponse
from django.core.handlers.wsgi import WSGIRequest
from emails import business
import json

# Create your views here.


def send_email_to_host(request: WSGIRequest) -> JsonResponse:
    data = json.loads(request.body)
    email = data["email"]
    message = data["message"]
    name = data["name"]
    try:
        business.send_email_to_host(email, message, name)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
    return JsonResponse({}, status=200)
