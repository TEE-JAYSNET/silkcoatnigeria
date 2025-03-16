from rest_framework import serializers
from .models import Distributor, PaintBucket, CoinLog

class DistributorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Distributor
        fields = ['id', 'username', 'email', 'total_coins']

class PaintBucketSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaintBucket
        fields = ['code', 'coins', 'claimed']

class CoinLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoinLog
        fields = ['distributor', 'bucket', 'date_claimed']
