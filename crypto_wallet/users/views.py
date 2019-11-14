from .serializers import UserSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
)
from crypto_wallet_server.database import db, encode_value, to_python


class UserViewSet(viewsets.ViewSet):
    """ Required for the Browsable API renderer to have a nice form. """
    serializer_class = UserSerializer

    def list(self, request):
        users = [to_python(user) for user in db.users.find()]
        serializer = UserSerializer(data=users, many=True)
        serializer.is_valid(raise_exception=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        if serializer.save():
            """ calls UserViewSet create(validated_data) """
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        user = db.users.find_one({'_id': encode_value(pk)})
        if user is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(data=to_python(user), status=status.HTTP_200_OK,)

    def update(self, request, pk=None):
        user_id = encode_value(pk)
        user = db.users.find_one({'_id': user_id})
        if user is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = UserSerializer(data=request.data, instance=user)
        if serializer.is_valid():
            if serializer.save():
                return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        user_id = encode_value(pk)
        user = db.users.find_one({'_id': user_id})
        if user is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        if user['permission'] != 'admin':
            user_is_deleted = db.users.delete_one({'_id': user_id})
            bank_account_is_deleted = db.bank_accounts.delete_one({'owner_id': user_id})
            if user_is_deleted is None:
                print("User wasn't deleted")
                return Response(status=status.HTTP_400_BAD_REQUEST)
            if bank_account_is_deleted is None:
                print("Bank account wasn't deleted")
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            print("User can't delete administrator")
            return Response(status=status.HTTP_405_NOT_ALLOWED)
        print("User was deleted successfully")
        return Response(data={'id': user_id}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['post'], permission_classes=[AllowAny,])
    def register(self, request):
        return self.create(request)

    @action(detail=False, methods=['post'], permission_classes=[AllowAny,])
    def login(self, request):
        user = db.users.find_one(request.data)
        if user is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(data=to_python(user), status=status.HTTP_200_OK)
