from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login
from .models import User
from django.contrib.auth.models import User


@api_view(['POST'])
def register_user(request):
    # import pdb; pdb.set_trace()
    if request.method == 'POST':
        email = request.data.get('email')
        password = request.data.get('password')


        user = User.objects.create_user(email=email, password=password, username=email)
        return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
    return Response({'message': 'Invalid request'}, status=status.HTTP_400_BAD_REQUEST)
    



from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User  
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def login_user(request):
    if request.method == 'POST':
        email = request.data.get('email')
        password = request.data.get('password')

        if not email or not password:
            return Response({'error': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            user = None

        if user is not None and user.check_password(password):
            login(request, user)
            
            return Response({'message': 'Login successful.'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)
    else:
        return Response({'error': 'Invalid request method.'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)