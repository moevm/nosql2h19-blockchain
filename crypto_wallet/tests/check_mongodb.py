import pymongo

client = pymongo.MongoClient('mongodb+srv://common_user:8FUQRfAaxp7Pgbvw@blockchain-60374.gcp.mongodb.net/admin?retryWrites=true&w=majority')
db = client.wallet

print(db.users.find_one({'login': 'Lonnie_Bishop'})['permission'])