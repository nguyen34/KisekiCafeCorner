from django.urls import path
import emails.views as views


urlpatterns = [
    path('api/send_email_to_host/', views.send_email_to_host),
]
