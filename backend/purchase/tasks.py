from celery import shared_task
from django.core.mail import send_mail


@shared_task
def send_email_created_purchase(id):
    send_mail(
        'Создан заказ',
        f'Создан заказ с id: {id}',
        'david99111@mail.ru',
        ['david99111@mail.ru'],
        fail_silently=True
    )

@shared_task
def send_email_updated_purchase(id):
    send_mail(
        'Обновлен предмет магазина',
        f'Обновлен предмет магазина с id: {id}',
        'david99111@mail.ru',
        ['david99111@mail.ru'],
        fail_silently=True
    )

def send_email_deleted_purchase(id):
    send_mail(
        'Удален предмет магазина',
        f'Удален предмет магазина с id: {id}',
        'david99111@mail.ru',
        ['david99111@mail.ru'],
        fail_silently=True
    )