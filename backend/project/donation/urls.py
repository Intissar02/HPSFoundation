from django.urls import path
from . import views

app_name = 'donation'

urlpatterns = [
    path('donate/', views.donate, name='donate'),
]
