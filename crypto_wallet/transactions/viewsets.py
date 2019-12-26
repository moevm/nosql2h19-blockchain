import pandas as pd
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny

from django.conf import settings
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

import os


IMPORT_PATH = os.path.join(settings.BASE_DIR, "database/import")
EXPORT_PATH = os.path.join(settings.BASE_DIR, "database/export")

os.makedirs(IMPORT_PATH, exist_ok=True)
os.makedirs(EXPORT_PATH, exist_ok=True)


def handle_uploaded_file(f, filename):
    path = os.path.join(IMPORT_PATH, filename)
    with open(path, 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)
        f.close()
    return path


class TransactionsViewSet(viewsets.ViewSet):
    permission_classes = (AllowAny,)
    def list(self, request):
        transactions = get_all_transactions()
        return Response(data=transactions,status=status.HTTP_200_OK)


    @action(detail=False, methods=['get'])
    def pivot_table1(self, request):
        transactions = get_all_transactions(hidden=('_id', 'sender_id', 'receiver_id'))
        df = pd.DataFrame(transactions)
        return Response(data=df,status=status.HTTP_200_OK)


    @action(detail=False, methods=['get'])
    def pivot_table2(self, request):
        transactions = get_all_transactions()
        df = pd.DataFrame(transactions)
        grouped = df.groupby('currency').sum()
        return Response(data=grouped.to_dict()['values'],status=status.HTTP_200_OK)


    @action(detail=False, methods=['get'])
    def pivot_table3(self, request):
        transactions = get_all_transactions()
        df = pd.DataFrame(transactions, columns=['currency', 'values'])
        df.columns = ['x', 'y']
        return Response(data=df,status=status.HTTP_200_OK)


    @action(detail=False, methods=['put'])
    def import_db(self, request):
        filename = request.FILES['filename']
        path = handle_uploaded_file(request.FILES['file'], filename)
        collection = filename.split('.json')[0]
        cmd = f"mongoimport --host blockchain-shard-00-01-60374.gcp.mongodb.net:27017 --db test_wallet --collection={collection} --type json --file {path} --jsonArray --authenticationDatabase admin --ssl --username common_user --password 8FUQRfAaxp7Pgbvw"
        os.system(cmd)
        return Response(status=status.HTTP_200_OK)


    @action(detail=False, methods=['get'])
    def export_db(self, request):
        for collection in db.list_collection_names():
            path = os.path.join(EXPORT_PATH, f"{collection}.json")
            cmd = f"mongoexport --host blockchain-shard-00-01-60374.gcp.mongodb.net:27017 --db wallet --collection={collection} --type json --out={path} --jsonArray --authenticationDatabase admin --ssl --username common_user --password 8FUQRfAaxp7Pgbvw --forceTableScan"
            os.system(cmd)
        return Response(status=status.HTTP_200_OK)
