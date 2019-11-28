from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from pymongo.errors import OperationFailure

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


class BankAccountViewSet(viewsets.ViewSet):
    permission_classes = (AllowAny,)

    def list(self, request):
        try:
            bank_accounts = [to_python(b) for b in db.bank_accounts.find()]
            bank_accounts = results_without_hidden(
                results=bank_accounts,
                hidden=('keypair',)
            )
            return Response(data=bank_accounts, status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)


    def retrieve(self, request, pk=None):
        bank_account = get_bank_account({'_id': pk})

        if bank_account is not None:
            bank_account = result_without_hidden(
                result=bank_account,
                hidden=('_id', 'user_id', 'keypair')
            )
            return Response(data=bank_account, status=status.HTTP_200_OK)

        return Response(
                data=msg('Bank account wasn\'t found'),
                status=status.HTTP_404_NOT_FOUND)


    @action(detail=False, methods=['get'])
    def current(self, request):
        user_id = request.user['_id']
        bank_account = get_bank_account({'user_id': user_id})

        if bank_account is not None:
            bank_account = result_without_hidden(
                result=bank_account,
                hidden=('_id', 'user_id', 'keypair')
            )
            return Response(data=bank_account, status=status.HTTP_200_OK)

        return Response(
            data=msg('Bank account wasn\'t found'),
            status=status.HTTP_404_NOT_FOUND)


    @action(detail=False, methods=['post'])
    def send(self, request):
        try:
            sender_id = request.user['_id']
            receiver = get_user({'username': request.data['receiver']})

            if receiver is None:
                return Response(
                    data=msg('Receiver wasn\'t found'),
                    status=status.HTTP_404_NOT_FOUND)

            sender_bank_account = get_bank_account({'user_id': sender_id})

            topup = {}
            sended = {}
            for i, remit in enumerate(request.data['remits']):
                currency = request.data['remits'][i]['currency']
                amount = request.data['remits'][i]['amount']
                if sender_bank_account[currency] < amount:
                    return Response(
                        data=msg('Insufficient funds'),
                        status=status.HTTP_400_BAD_REQUEST)
                topup[currency] = amount
                sended[currency] = -amount

            db.bank_accounts.update_one(
                {'user_id': encode_value(sender_id)},
                {'$inc': sended})

            db.bank_accounts.update_one(
                {'user_id': encode_value(receiver['_id'])},
                {'$inc': topup})
    
            return Response(status=status.HTTP_200_OK)
    
        except:
            return Response(
                data=msg('Check request data'),
                status=status.HTTP_400_BAD_REQUEST)


    @action(detail=False, methods=['post'])
    def topup(self, request):
        user_id = request.user['_id']
        user = get_user({'_id': user_id})

        if user is not None:
            topup = {}
            for i, remit in enumerate(request.data['remits']):
                currency = request.data['remits'][i]['currency']
                amount = request.data['remits'][i]['amount']
                topup[currency] = amount

            db.bank_accounts.update_one(
                {'user_id': encode_value(user_id)},
                {'$inc': topup})
            print(topup)
            return Response(status=status.HTTP_200_OK)

        return Response(
            data=msg('User wasn\'t found'),
            status=status.HTTP_404_NOT_FOUND)
