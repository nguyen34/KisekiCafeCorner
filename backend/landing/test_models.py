from django.test import TestCase
from .models import *


class ArticleModelsTestCases(TestCase):
    def setUp(self):
        Article.objects.all().delete()

    def test_article_models(self):
        article = Article.objects.create(
            title="Test Title", body="Test Description")
        self.assertEqual(Article.objects.count(), 1)
        self.assertEqual(article.title, "Test Title")
        self.assertEqual(article.body, "Test Description")
        self.assertEqual(Article.objects.all()[0], article)
        self.assertEqual(Article.objects.all()[
                         0].__str__(), "Test Title")
