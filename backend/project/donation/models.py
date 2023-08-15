from django.db import models

class Donation(models.Model):
    email = models.EmailField()
    gender = models.CharField(max_length=100)

    def __str__(self):
        return f"Email: {self.email}, Gender: {self.gender}"
