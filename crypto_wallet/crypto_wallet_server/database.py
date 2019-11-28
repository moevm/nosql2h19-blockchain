from bson import ObjectId
from pymongo import MongoClient
from .settings import DB_NAME, DB_HOST
from .exceptions import NoDatabaseException


client = MongoClient(host=DB_HOST)
db = getattr(client, DB_NAME, None)
if db is None:
    raise NoDatabaseException()


def decode_value(value):
    return str(value)

def encode_value(value):
    return ObjectId(value)

def to_python(mongo_data):
    if isinstance(mongo_data, dict):
        for k,v in mongo_data.items():
            if isinstance(v, ObjectId):
                mongo_data[k] = decode_value(v)
    else:
        return decode_value(mongo_data)
    return mongo_data

def to_mongo(data):
    _id = data.get('_id', None)
    user_id = data.get('user_id', None)
    if _id is not None:
        data['_id'] = encode_value(_id)
    if user_id is not None:
        data['user_id'] = encode_value(user_id)
    return data

def to_frontend():
    pass

def get_user(data):
    user = db.users.find_one(to_mongo(data))
    if user is not None:
        return to_python(user)
    return None

def get_bank_account(data):
    bank_account = db.bank_accounts.find_one(to_mongo(data))
    if bank_account is not None:
        return to_python(bank_account)
    return None

def get_all_transactions():
    transactions = [to_python(transaction) for transaction in db.transactions.find()]
    transactions = results_without_hidden(
        results=transactions,
        hidden=('_id',)
    )
    return transactions

def get_transactions(data):
    transactions = db.transactions.find(to_mongo(data))
    if transactions is not None:
        transactions = [to_python(transaction) for transaction in transactions]
        transactions = results_without_hidden(
            results=transactions,
            hidden=('_id',)
        )
        return transactions
    return None

def result_without_hidden(result, hidden):
    for key in hidden:
        result.pop(key, None)
    return result

def results_without_hidden(results, hidden):
    for i, result in enumerate(results):
        results[i] = result_without_hidden(result, hidden)
    return results