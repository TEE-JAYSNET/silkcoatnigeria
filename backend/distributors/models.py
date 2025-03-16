from django.db import models

class Distributor(models.Model):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)  # Use Django's hashing mechanism
    total_coins = models.IntegerField(default=0)

    def __str__(self):
        return self.username

class PaintBucket(models.Model):
    code = models.CharField(max_length=20, unique=True)  # Unique PIN
    coins = models.IntegerField()  # Coins assigned to this paint
    claimed = models.BooleanField(default=False)  # Prevent duplicate claims

    def __str__(self):
        return f"{self.code} - {self.coins} coins"

class CoinLog(models.Model):
    distributor = models.ForeignKey(Distributor, on_delete=models.CASCADE, related_name='logs')
    bucket = models.ForeignKey(PaintBucket, on_delete=models.CASCADE)
    date_claimed = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.distributor.username} claimed {self.bucket.coins} coins"

# pin model
class Pin(models.Model):
    codes = models.CharField(max_length=100, unique=True)
    coins = models.PositiveIntegerField(default=0)
    is_used = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.code} - {self.coins} coins"
    

# class Pin(models.Model):
#     pin_code = models.CharField(max_length=20, unique=True)
#     coin_value = models.PositiveIntegerField()
#     is_claimed = models.BooleanField(default=False)
#     claimed_by = models.CharField(max_length=100, null=True, blank=True)  # For tracking distributors
#     claimed_at = models.DateTimeField(null=True, blank=True)

#     def __str__(self):
#         return self.pin_code
    

# paint model that stores the PIN codes and their corresponding coin values.
class Paint(models.Model):
    name = models.CharField(max_length=255)
    pin = models.CharField(max_length=255, unique=True)
    coins = models.IntegerField(default=0)

    def __str__(self):
        return self.name
