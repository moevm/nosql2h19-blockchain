import pandas as pd
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny

from crypto_wallet_server.database import (
    db,
    to_mongo,
    to_python,
    encode_value,
    get_bank_account,
    get_user,
    result_without_hidden,
    results_without_hidden,
    get_transactions,
    get_all_transactions,
)

class TransactionsViewSet(viewsets.ViewSet):
    permission_classes = (AllowAny,)

    def list(self, request):
        transactions = get_all_transactions()
        # for i,transaction in enumerate(transactions):
            # transactions[i]['sender'] = get_user(transaction['sender']).username
        return Response(data=transactions,status=status.HTTP_200_OK)


    @action(detail=False, methods=['get'])
    def pivot_table1(self, request):
        transactions = get_all_transactions()
        df = pd.DataFrame(transactions)
        return Response(data=df,status=status.HTTP_200_OK)


    @action(detail=False, methods=['get'])
    def pivot_table2(self, request):
        transactions = get_all_transactions(hidden=('_id', 'date', 'sender', 'recipient'))
        df = pd.DataFrame(transactions)
        grouped = df.groupby('currency').sum()
        return Response(data=grouped.to_dict()['values'],status=status.HTTP_200_OK)


    @action(detail=False, methods=['get'])
    def pivot_table3(self, request):
        transactions = get_all_transactions(hidden=('_id', 'date', 'sender', 'recipient'))
        df = pd.DataFrame(transactions)
        df.columns = ['x', 'y']
        return Response(data=df,status=status.HTTP_200_OK)
