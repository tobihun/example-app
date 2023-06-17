#!/bin/sh
python manage.py makemigrations
python manage.py migrate
python manage.py createcachetable
python manage.py collectstatic --noinput
python manage.py createsuperuser --noinput
gunicorn backend_django.wsgi:application --bind 0.0.0.0:8080