
from django.contrib import admin
from .models import ContactUs

class ContactUsAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'message', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('full_name', 'email')

admin.site.register(ContactUs, ContactUsAdmin)
