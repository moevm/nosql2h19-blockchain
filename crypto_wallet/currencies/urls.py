from rest_framework import routers
from .views import CurrencyViewSet

router = routers.DefaultRouter()

router.register(r'', CurrencyViewSet, basename='CurrencyViewSet')

urlpatterns = router.urls
