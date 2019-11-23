from rest_framework import routers
from .viewsets import UserViewSet

router = routers.DefaultRouter()

router.register(r'', UserViewSet, basename='UserViewSet')

urlpatterns = router.urls
