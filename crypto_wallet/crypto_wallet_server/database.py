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

def to_frontend():
    pass

def get_user(data):
    _id = data.get('_id', None)
    if _id is not None:
        data['_id'] = encode_value(_id)
    user = db.users.find_one(data)
    if user:
        return to_python(user)
    return None
