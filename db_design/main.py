import pymongo

from datetime import date, datetime

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

#setup db for unique logins
users_api.setup_collection_users(db)
#create admin account
db.users.insert_one(admin)
#add new users
users_list = users_api.generate_users_data()
for user in users_list:
    users_api.add_new_user(db, user)

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

curr_l.add_currencies(db)