from django.urls import path
import landing.views as views

urlpatterns = [
    path('api/test_redux_django/', views.test_redux_django,
         name='test_redux_django'),
]
