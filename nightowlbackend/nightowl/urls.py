from django.conf.urls import url
from django.conf.urls import url
from django.urls import path

from nightowl import views

urlpatterns=[
    path('books/',views.get_all_books),
    path('books/<str:bookid>/',views.get_all_books),
    path('dashboard/',views.get_statistics),

]