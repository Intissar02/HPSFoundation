from django.shortcuts import render
from .models import Donation


def donate(request):
    if request.method == 'POST':
        form = donationForm(request.POST)
        if form.is_valid():
            form.save()
            
    else:
        form = donationForm()
    return render(request, 'register.html', {'form': form})
