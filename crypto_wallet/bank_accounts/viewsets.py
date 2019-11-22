from .serializers import BankAccountSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
)
from pymongo.errors import OperationFailure


class BankAccountViewSet(viewsets.ViewSet):
    """ Required for the Browsable API renderer to have a nice form. """
    serializer_class = BankAccountSerializer

    def list(self, request):
        pass

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass