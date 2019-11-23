from django.urls import path, include

from .views import obtain_jwt_token
from .views import refresh_jwt_token
from .views import verify_jwt_token

urlpatterns = [
    path('authenticate/', obtain_jwt_token),
    path('refresh/', refresh_jwt_token), 
    path('verify/', verify_jwt_token),
]
