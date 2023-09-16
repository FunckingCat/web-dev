from celery import shared_task
from django.core.mail import send_mail


@shared_task
def send_email_created_delivery(id):
    send_mail(
        'Создана новая доставка',
        f'Создана доставка id: {id}',
        'david99111@mail.ru',
        ['david99111@mail.ru'],
        fail_silently=True
        )

@shared_task
def send_email_updated_delivery(id):
    send_mail(
        'Изменена доставка',
        f'Изменена доставка с id: {id}',
        'david99111@mail.ru',
        ['david99111@mail.ru'],
        fail_silently=True
    )

def send_email_deleted_delivery(id):
    send_mail(
        'Удалена доставка',
        f'Удалена доставка с id: {id}',
        'david99111@mail.ru',
        ['david99111@mail.ru'],
        fail_silently=True
    )
