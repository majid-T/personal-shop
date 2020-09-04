from django.shortcuts import render

from rest_framework import viewsets

from .serializers import ShopItemSerializer
from .models import ShopItem


class ShopItemViewSet(viewsets.ModelViewSet):
    queryset = ShopItem.objects.all().order_by('id')
    serializer_class = ShopItemSerializer

# Create your views here.
