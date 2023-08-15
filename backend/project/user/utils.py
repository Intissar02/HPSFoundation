from django.contrib.auth.models import User
from .utils import email_exists

def email_exists(email):
    return User.objects.filter(email=email).exists()
