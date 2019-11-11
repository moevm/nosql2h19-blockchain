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
        return encode_value(mongo_data)
    return mongo_data

def to_frontend():
    pass