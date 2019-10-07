import pymongo

client = pymongo.MongoClient("mongodb+srv://<username>:<password>@blockchain-60374.gcp.mongodb.net/admin?retryWrites=true&w=majority")
db = client.test

print(db)