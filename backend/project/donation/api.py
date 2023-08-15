from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def donation(request):
    if request.method == 'POST':
        serializer = DonationSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Donation submitted successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    return Response({'message': 'Invalid request'}, status=status.HTTP_400_BAD_REQUEST)




