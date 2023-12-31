from django.urls import path
from articles import views

app_name = 'articles'
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:pk>/',views.detail, name='detail'),
    path('create/', views.create, name='create'),
    path('<int:pk>/delete', views.delete, name='delete'),
    path('alldelete/', views.alldelete, name='alldelete'),
    path('<int:pk>/update', views.update, name='update'),
    path('<int:pk>/comments/',views.comments_create, name='comments_create'),
]