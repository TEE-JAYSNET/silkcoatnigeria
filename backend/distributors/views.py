from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Distributor, PaintBucket, CoinLog
from .serializers import DistributorSerializer, PaintBucketSerializer

# Create your views here.

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.timezone import now
from .models import Pin
import json

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny
from .models import Pin  # Import your model where PINs are stored



# @permission_classes([IsAuthenticated])
@csrf_exempt  # Exempts from CSRF checks; use cautiously in production.
@api_view(['POST'])
@permission_classes([AllowAny])  # Allow anyone to access this endpoint

def claim_coins(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        pin = body.get('pin')

        if pin:
            # Check if the PIN exists in the database
            try:
                pin_entry = Pin.objects.get(code=pin)  # Adjust `code` to your field name
                if pin_entry.is_used:  # Optional: Prevent reuse of the same PIN
                    return Response({'error': 'This PIN has already been used.'}, status=400)
                
                # Mark the PIN as used and return the coins
                pin_entry.is_used = True
                pin_entry.save()
                return Response({'success': True, 'coins': pin_entry.coins}, status=200)
            except Pin.DoesNotExist:
                return Response({'error': 'Invalid PIN'}, status=400)
        return Response({'error': 'PIN is required'}, status=400)
    return Response({'error': 'Invalid request method'}, status=405)

# def claim_coins(request):
#     if request.method == 'POST':
#         body = json.loads(request.body)
#         pin = body.get('pin')
#         if pin:
#             # Placeholder logic for demonstration purposes
#             coins = 10 if pin == "12345" else 5
#             return Response({'success': True, 'coins': coins}, status=200)
#         return Response({'error': 'Invalid PIN'}, status=400)
#     return Response({'error': 'Invalid request method'}, status=405)

# def claim_coins(request):
#     if request.method == 'POST':
#         body = json.loads(request.body)
#         pin = body.get('pin')
#         if pin:
#             # Placeholder logic for demonstration purposes
#             coins = 10 if pin == "12345" else 5
#             return Response({'success': True, 'coins': coins}, status=200)
#         return Response({'error': 'Invalid PIN'}, status=400)
#     return Response({'error': 'Invalid request method'}, status=405)

# def claim_coins(request):
#     if request.method == 'POST':
#         try:
#             body = json.loads(request.body)
#             pin = body.get('pin')
#             distributor = body.get('distributor')  # Add distributor info in the request body
#             if pin:
#                 pin_entry = Pin.objects.filter(pin_code=pin, is_claimed=False).first()
#                 if pin_entry:
#                     pin_entry.is_claimed = True
#                     pin_entry.claimed_by = distributor
#                     pin_entry.claimed_at = now()
#                     pin_entry.save()
#                     return JsonResponse({'success': True, 'coins': pin_entry.coin_value}, status=200)
#                 return JsonResponse({'error': 'Invalid or already claimed PIN'}, status=400)
#             return JsonResponse({'error': 'PIN not provided'}, status=400)
#         except json.JSONDecodeError:
#             return JsonResponse({'error': 'Invalid JSON format'}, status=400)
#     return JsonResponse({'error': 'Invalid request method'}, status=405)



class ClaimCoinsView(APIView):
    def post(self, request):
        code = request.data.get('code')
        username = request.data.get('username')

        try:
            bucket = PaintBucket.objects.get(code=code, claimed=False)
            distributor = Distributor.objects.get(username=username)

            # Update distributor's coins
            distributor.total_coins += bucket.coins
            distributor.save()

            # Mark bucket as claimed
            bucket.claimed = True
            bucket.save()

            # Log the claim
            CoinLog.objects.create(distributor=distributor, bucket=bucket)

            return Response({'message': 'Coins claimed successfully!'}, status=status.HTTP_200_OK)
        except PaintBucket.DoesNotExist:
            return Response({'error': 'Invalid or already claimed code.'}, status=status.HTTP_400_BAD_REQUEST)
        except Distributor.DoesNotExist:
            return Response({'error': 'Distributor not found.'}, status=status.HTTP_404_NOT_FOUND)

