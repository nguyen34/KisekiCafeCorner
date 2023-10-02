from django.urls import path
import app.views as views

urlpatterns = [
    path('api/csrf/', views.csrf, name='csrf'),
    path('api/ping/', views.ping, name='ping'),
]
