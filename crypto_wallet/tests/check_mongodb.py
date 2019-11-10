import pymongo
from crypto_wallet_app import database

database.connect
client = pymongo.MongoClient('mongodb+srv://common_user:8FUQRfAaxp7Pgbvw@blockchain-60374.gcp.mongodb.net/admin?retryWrites=true&w=majority')
db = client.test

print(db)