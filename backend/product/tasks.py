from celery import shared_task
from django.core.mail import send_mail


@shared_task
def send_email(title, message):
    send_mail(
        title,
        message,
        'david99111@mail.ru',
        ['david99111@mail.ru'],
        fail_silently=True
    )
