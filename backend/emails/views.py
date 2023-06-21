from django.shortcuts import render
from django.http import JsonResponse
from django.core.handlers.wsgi import WSGIRequest
import json

# Create your views here.


def send_email_to_host(request: WSGIRequest) -> JsonResponse:
    data = json.loads(request.body)
    email = data["email"]
    message = data["message"]
    name = data["name"]
    return JsonResponse({"message": f'Received email from {name} ({email}): {message}'})
