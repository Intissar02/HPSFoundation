# contactus/api.py
from rest_framework import viewsets
from .models import ContactUs
from .serializers import ContactUsSerializer
from rest_framework import routers

class ContactUsViewSet(viewsets.ModelViewSet):
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsSerializer

router = routers.DefaultRouter()
router.register(r'contact-us', ContactUsViewSet)
