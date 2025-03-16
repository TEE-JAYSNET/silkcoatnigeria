from django.contrib import admin
from .models import Pin
from .models import Paint

# Register your models here.
# @admin.register(Pin)
# class PinAdmin(admin.ModelAdmin):
#     list_display = ('pin_code', 'coin_value', 'is_claimed', 'claimed_by', 'claimed_at')


@admin.register(Pin)
class PinAdmin(admin.ModelAdmin):
    list_display = ('code', 'coins', 'is_used')
    list_filter = ('is_used',)
    search_fields = ('code',)


@admin.register(Paint)
class PaintAdmin(admin.ModelAdmin):
    list_display = ['name', 'pin', 'coins']
    search_fields = ['name', 'pin']

