import pymongo

from datetime import date, datetime
import random

import users_api
import bank_accounts_api as bnk_api
import statistic_api as stat
import bitcoin_price_api as btc_p
import currencies_list_api as curr_l


# connect to db on the Atlas
client = pymongo.MongoClient(
    "mongodb+srv://akuma:akuma555@blockchain-60374.gcp.mongodb.net/test?retryWrites=true&w=majority"
)
db = client["wallet"]

# client = pymongo.MongoClient('localhost', 27017)
# db = client["bigchain"]

# users_collection = db["users"]
# accounts_collection = db["bank_accounts"]

admin = {
    "username"         : "admin",
    "password"      : "GOD",
    "permission"    : "admin",
    "email"        : "admin@gmail.com",
    "registration_date" : datetime.utcnow().isoformat()
}

permition_list = { "user", "admin"}

# MAKE DB CODE

# #setup db for unique logins
# users_api.setup_collection_users(db)
# #create admin account
# db.users.insert_one(admin)
# #add new users
# users_list = users_api.generate_users_data()
# for user in users_list:
#     users_api.add_new_user(db, user)

# setup bitcoin_price collection
# btc_p.setup_collection_bitcoin_price(db)
# run on th server function which get statistic each one hour

#################################################

# add_new_user(test_user)
# users_api.delete_user_by_login(db, "George_Cortez")
# update_user_data("Crystal_Armstrong", "newpass3dasd", "fdf222@gmail.com")
# bnk_api.make_remittance(db, "Maggie_Summers", "Lonnie_Bishop", "bitcoin", 6)
# bnk_api.increase_balance(db, "Dwayne_Spencer", "USD", 100.8)
# users_api.add_field_regist_date(db)
# stat.get_bitcoin_price_statistic()
# btc_p.add_new_bitcoin_price(db)
# curr_l.add_currencies(db)

possible_currency = ["btc", "eth", "ltc", "usd", "rub", "gbr"]

def generate_transaction(sender, recipient, sender_id, receiver_id) :
    transaction = {
        "sender_id"     : sender_id,
        "receiver_id"   : receiver_id,
        "sender"        : sender,
        "receiver"      : recipient,
        "currency"      : random.choice(possible_currency),
        "values"        : random.randrange(10),
        "date"          : datetime.utcnow().isoformat()
    }

    return transaction

def gen_ammount_transaction() :
    cursor = db.bank_accounts.find({})
    data = list(cursor)

    for curr_user in data:
        for i in range(random.randint(5, 15)):
            some_user = random.choice(data)
            if (some_user["user_id"] != curr_user["user_id"]) :
                transaction = generate_transaction(curr_user["keypair"]["public_key"],
                                                   some_user["keypair"]["public_key"],
                                                   curr_user["user_id"],
                                                   some_user["user_id"])
                print(transaction)
                db.transactions.insert_one(transaction)


def get_stat_transactions():
    count_trans_by_curr = []
    for curr in possible_currency:
        count_trans_by_curr.append(db.transactions.find({"currency" : curr}).count())
    
    return count_trans_by_curr

# gen_ammount_transaction()

print(get_stat_transactions())

