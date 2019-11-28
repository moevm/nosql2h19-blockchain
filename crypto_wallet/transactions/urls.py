from rest_framework import routers
from .viewsets import TransactionsViewSet

router = routers.DefaultRouter()

router.register(r'', TransactionsViewSet, basename='TransactionsViewSet')

urlpatterns = router.urls
