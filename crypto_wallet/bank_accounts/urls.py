from rest_framework import routers
from .views import BankAccountViewSet

router = routers.DefaultRouter()

router.register(r'', BankAccountViewSet, basename='BankAccountViewSet')

urlpatterns = router.urls
