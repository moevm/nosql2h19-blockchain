import pymongo
import urllib3
import json
from datetime import datetime

def get_bitcoin_price():
    URL = "https://blockchain.info/ticker"
    http = urllib3.PoolManager()
    r = http.request('GET', URL)
    getting_time = datetime.utcnow()
    data = json.loads(r.data.decode('utf-8'))
    print(data)
    return { "getting_time" : getting_time, "data": data}

# setup for store statistic on 24 hourse (get each hour)
def setup_collection_bitcoin_price(db):
    db.create_collection('bitcoin_price', capped=True, size=50000, max=24)

def add_new_bitcoin_price(db):
    db.bitcoin_price.insert_one(get_bitcoin_price())

