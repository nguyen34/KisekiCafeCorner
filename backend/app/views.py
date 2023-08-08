from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie

# Create your views here.

from django.http import JsonResponse
from django.middleware.csrf import get_token


@ensure_csrf_cookie
def csrf(request):
    return JsonResponse({})


def ping(request):
    return JsonResponse({'result': 'OK'})
