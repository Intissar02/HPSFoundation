# contactus/urls.py
from django.urls import path, include
# from .views import contact_us
# from .api import router
from .views import contact_us

urlpatterns = [
    #path('contact-us/', contact_us, name='contact-us'),
    #path('api/contactus/', include(router.urls)),
    path('contact-us/', contact_us, name='contact-us'),


]

