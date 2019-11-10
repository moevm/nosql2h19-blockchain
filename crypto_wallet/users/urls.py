from rest_framework import routers
from crypto_wallet.accounts.views import UserViewSet

router = routers.DefaultRouter()

router.register(r'', UserViewSet, basename='UserViewSet')

urlpatterns = router.urls
