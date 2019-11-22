from rest_framework import routers
from .viewsets import BankAccountViewSet

router = routers.DefaultRouter()

router.register(r'', BankAccountViewSet, basename='BankAccountViewSet')

urlpatterns = router.urls
