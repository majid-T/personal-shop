from django.db import models

# Create your models here.


class ShopItem(models.Model):
    name = models.CharField(max_length=60)
    desc = models.CharField(max_length=300)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return self.name
