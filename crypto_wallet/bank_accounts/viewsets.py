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

from crypto_wallet_server.database import db, to_python, get_bank_account


class BankAccountViewSet(viewsets.ViewSet):
    """ Required for the Browsable API renderer to have a nice form. """
    serializer_class = BankAccountSerializer

    def list(self, request):
        bank_accounts = [to_python(b) for b in db.bank_accounts.find()]
        serializer = BankAccountSerializer(data=bank_accounts, many=True)
        serializer.is_valid(raise_exception=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)


    def create(self, request):
        serializer = BankAccountSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        if serializer.save():
            """calling BankAccountSerializer create(validated_data)"""
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def retrieve(self, request, pk=None):
        bank_account = get_bank_account({'_id': pk})
        if bank_account is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(data=bank_account, status=status.HTTP_200_OK)


    def update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass

    @action(detail=False, methods=['get'], permission_classes=[AllowAny,])
    def current(self, request):
        user_id = request.user['_id']
        bank_account = get_bank_account({'user_id': user_id})
        if bank_account is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(data=bank_account, status=status.HTTP_200_OK)


    @action(detail=False, methods=['post'], permission_classes=[IsAuthenticated,])
    def send(self, request):
        pass

    @action(detail=False, methods=['post'], permission_classes=[IsAuthenticated,])
    def popup(self, request):
        pass
