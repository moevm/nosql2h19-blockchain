from .serializers import UserSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
)
from pymongo.errors import OperationFailure
from crypto_wallet_server.database import db, get_user


class UserViewSet(viewsets.ViewSet):
    """ Required for the Browsable API renderer to have a nice form. """
    serializer_class = UserSerializer

    def list(self, request):
        users = list(db.users.find())
        serializer = UserSerializer(instance=users, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            """ calls UserViewSet create(validated_data) """
            if serializer.save():
                print('User was created')
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request):
        user = get_user(username=request.data['username'])
        if not user:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data)

    def update(self, request, pk=None):
        user = get_user(username=pk)
        if not user:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = UserSerializer(data=request.data, instance=user)
        if serializer.is_valid():
            if serializer.save():
                return Response(serializer.data, status=status.HTTP_201_CREATED,
                    data={'id': user.id})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        user_id = get_user(username=pk).id
        if not user_id:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if user['permission'] != 'admin':
            user_is_deleted = db.users.delete_one({'_id': user_id})
            wallet_is_deleted = db.wallets.delete_one({'owner_id': user_id})
            if user_is_deleted is None:
                raise OperationFailure("User wasn't deleted")
                return Response(status=status.HTTP_400_BAD_REQUEST)
            if wallet_is_deleted is None:
                raise OperationFailure("Bank account wasn't deleted")
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            raise PermissionError("User can't delete administrator")
            return Response(status=status.HTTP_405_NOT_ALLOWED)

        print("User was deleted successfully")
        return Response(status=status.HTTP_200_OK, data={'id': user_id})

    @action(detail=False, methods=['post'], permission_classes=[AllowAny,])
    def register(self, request):
        return self.create(request)

    @action(detail=False, methods=['post'], permission_classes=[AllowAny,])
    def login(self, request):
        return self.retrieve(request)
