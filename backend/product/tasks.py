from celery import shared_task
from django.core.mail import send_mail


@shared_task
def send_email(title, message):
    print('FooBar')
    send_mail(
        title,
        message,
        'david99111@mail.ru',
        ['david99111@mail.ru'],
        fail_silently=False
    )
