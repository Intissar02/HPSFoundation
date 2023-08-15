from django.db import models

class ContactUs(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)  # This is important

    def __str__(self):
        return self.full_name
