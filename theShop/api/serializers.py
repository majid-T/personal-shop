from rest_framework import serializers
from .models import ShopItem


class ShopItemSerializer (serializers.HyperLinkedModelSerializer):
    class Meta:
        model = ShopItem
        fields = ('name', 'desc', 'price', 'quantity')
