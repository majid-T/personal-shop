from rest_framework import serializers
from .models import ShopItem


class ShopItemSerializer (serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ShopItem
        fields = ('id', 'name', 'desc', 'price', 'quantity')
