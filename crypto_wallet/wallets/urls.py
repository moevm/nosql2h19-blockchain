from rest_framework import routers
from .views import WalletViewSet

router = routers.DefaultRouter()

router.register(r'', WalletViewSet, basename='WalletViewSet')

urlpatterns = router.urls
