from django.urls import path
import app.views as views

urlpatterns = [
    path('api/csrf/', views.csrf),
    path('api/ping/', views.ping),
]
