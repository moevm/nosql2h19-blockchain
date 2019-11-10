from .settings import DB_NAME, DB_USER, DB_PASSWORD
from pymongo import MongoClient

from crypto_wallet_server.exceptions import NoDatabaseException, UserNotFound



client = MongoClient(
    f'mongodb+srv://{DB_USER}:{DB_PASSWORD}@blockchain-60374.gcp.mongodb.net/admin?retryWrites=true&w=majority'
)

db = getattr(client, DB_NAME, None)

if db is None:
    raise NoDatabaseException()

def get_user(username):
    user = db.users.find_one({'username': username})
    if user is None:
        raise UserNotFound("User isn't exist")
    return user
