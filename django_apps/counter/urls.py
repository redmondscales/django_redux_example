from django.urls import path

from django_apps.counter.views import counter

urlpatterns = [
    path('', counter)
]