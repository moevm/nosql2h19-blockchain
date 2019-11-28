from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from bigchaindb_driver.crypto import generate_keypair

from core.base import msg
from crypto_wallet_server.database import (
    db,
    to_mongo,
    to_python,
    encode_value,
    get_bank_account,
    get_user,
    result_without_hidden,
    results_without_hidden,
)


class UserViewSet(viewsets.ViewSet):
    permission_classes = (AllowAny, )

    def list(self, request):
        try:
            users = [to_python(user) for user in db.users.find()]
            users = results_without_hidden(results=users, hidden=('password',))
            return Response(data=users, status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)


    def retrieve(self, request, pk=None):
        user = get_user({'_id': pk})
        if user is not None:
            user = result_without_hidden(result=user, hidden=('password',))
            return Response(data=to_python(user), status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)


    def update(self, request, pk=None):
        user = get_user({'_id': pk})
        if user is None:
            return Response(
                data=msg('User not found'),
                status=status.HTTP_404_NOT_FOUND)
        else:
            db.users.update_one(
                {"_id": encode_value(pk)},
                {"$set": request.data}
            )
            return Response(status=status.HTTP_200_OK)


    def destroy(self, request, pk=None):
        user = get_user({'_id': pk})
        user_id = encode_value(pk)

        if user is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if user['permission'] != 'admin':
            user_is_deleted = db.users.delete_one({'_id': user_id})
            bank_account_is_deleted = db.bank_accounts.delete_one({'user_id': user_id})

            if user_is_deleted is None:
                return Response(
                    data=msg('User wasn\'t deleted'),
                    status=status.HTTP_400_BAD_REQUEST)

            if bank_account_is_deleted is None:
                return Response(
                    data=msg('Bank account wasn\'t deleted'),
                    status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(
                data=msg('User can\'t delete administrator'),
                status=status.HTTP_405_METHOD_NOT_ALLOWED)

        return Response(
            data=msg('User was deleted successfully'),
            status=status.HTTP_200_OK)


    @action(detail=False, methods=['post'])
    def register(self, request):
        inserted_user = db.users.insert_one(request.data)
        if inserted_user.acknowledged:
            keypair = generate_keypair()
            init_bank_account = {
                "user_id" : inserted_user.inserted_id,
                "btc"     : 0,
                "eth"     : 0,
                "ltc"     : 0,
                "usd"     : 0,
                "rub"     : 0,
                "gbr"     : 0,
                "keypair" :
                    {
                        "public_key"    : keypair.public_key,
                        "private_key"   : keypair.private_key
                    }
            }
            db.bank_accounts.insert_one(init_bank_account)
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['get'])
    def current(self, request):
        user = request.user
        user = result_without_hidden(result=user, hidden=('password',))
        return Response(data=to_python(user), status=status.HTTP_200_OK)
