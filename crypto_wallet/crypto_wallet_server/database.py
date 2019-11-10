from django.conf.setting import DATABASE
from pymongo import MongoClient

from crypto_wallet_server.exceptions import NoDatabaseException
from crypto_wallet_server.extensions import UserNotFound


client = MongoClient(
    f'mongodb+srv://{DATABASE.USER}:{DATABASE.PASSWORD}@blockchain-60374.gcp.mongodb.net/admin?retryWrites=true&w=majority'
)

db = getattr(client, DATABASE.NAME, None)

if db is None:
    raise NoDatabaseException()

def get_user(username):
    user = db.users.find_one({'username': username})
    if user is None:
        raise UserNotFound("User isn't exist")
    return user
