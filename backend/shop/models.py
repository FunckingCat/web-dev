from django.db import models
from django.db.models.signals import pre_delete
from django.dispatch import receiver
from purchase.models import Purchase
import os

from authentication.models import User


class ShopItems(models.Model):
    price = models.DecimalField(max_digits=10, decimal_places=2)
    img = models.ImageField(upload_to='shop', verbose_name='Фото товара')
    title = models.CharField(verbose_name='Название товара', max_length=255)
    desc = models.TextField(verbose_name='Описание товара')
    purchase = models.ForeignKey(Purchase, related_name="shop_items", on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return str(self.title)

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'
        ordering = ['id', 'title']

# Когда предмет будет удаляться, то и её фотография будет удалятся из media/shop
@receiver(pre_delete, sender=ShopItems)
def delete_image(sender, instance, **kwargs):
    image_path = instance.image.path

    if os.path.exists(image_path):
        os.remove(image_path)

class Shoes(models.Model):
    name = models.CharField(verbose_name='Название обуви', max_length=255)
    image = models.ImageField(verbose_name='Изображение', upload_to='shoes')

    def __str__(self):
        return str(self.name)

    class Meta:
        verbose_name = 'Обувь'
        verbose_name_plural = 'Обувь'

class Order(models.Model):
    price = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateTimeField(auto_now_add=True, verbose_name='Время создания заказа')
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Покупатель')
    shoes_id = models.ForeignKey(Shoes, on_delete=models.CASCADE, verbose_name='Предмет заказа')

    def __str__(self):
        return str(self.price)

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'