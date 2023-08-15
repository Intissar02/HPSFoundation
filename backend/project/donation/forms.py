from django import forms
from .models import Donate

class DonationForm(forms.ModelForm):
    class Meta:
        model = Donation
        fields = [ 'email','gender']

        