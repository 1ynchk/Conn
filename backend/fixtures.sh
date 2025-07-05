#!/bin/bash

python manage.py makemigrations 
python manage.py flush --noinput
python manage.py migrate 
python manage.py loaddata users 
python manage.py loaddata connections 
python manage.py loaddata ports 
python manage.py loaddata switches
python manage.py loaddata staff 

gunicorn conn.wsgi:application --bind 0.0.0.0:8000
