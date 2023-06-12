from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ArticleSerializer
from .models import Article
from django.http import JsonResponse
from django.core.handlers.wsgi import WSGIRequest

# Create your views here.


class ArticleView(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
# Create your views here.


def test_redux_django(request: WSGIRequest) -> JsonResponse:
    return JsonResponse({"message": "Hello, world. You're at the landing index."})
