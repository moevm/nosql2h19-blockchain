import pymongo

from datetime import date

import users_api
import bank_accounts_api as bnk_api
import statistic_api as stat
import bitcoin_price_api as btc_p


# connect to db on the Atlas
client = pymongo.MongoClient(
    "mongodb+srv://akuma:akuma555@blockchain-60374.gcp.mongodb.net/test?retryWrites=true&w=majority"
)

db = client["wallet"]
# users_collection = db["users"]
# accounts_collection = db["bank_accounts"]

admin = {
    "login"         : "admin",
    "password"      : "GOD",
    "permission"    : "admin",
    "bank_account"  : None,
    "e-mail"        : "admin@gmail.com",
    "registration_date" : date(2000, 1, 1)
}

permition_list = { "user", "admin"}

# MAKE DB CODE

# #setup db for unique logins
# setup_collection_users()
# #create admin account
# db.users.insert_one(admin)
# #add new users
# users_list = generate_users_data()
# for user in users_list:
#     add_new_user(user)

#setup bitcoin_price collection
# btc_p.setup_collection_bitcoin_price(db)
# run on th server function which get statistic each one hour

#################################################

test_user = {
    "login"         : "test_user",
    "password"      : "sdasd",
    "permission"    : "user",
    "bank_account"  : None,
    "e-mail"        : "test_user@gmail.com",
    "registration_date" : date.today()
}

# add_new_user(test_user)
# users_api.delete_user_by_login(db, "George_Cortez")
# update_user_data("Crystal_Armstrong", "newpass3dasd", "fdf222@gmail.com")
# bnk_api.make_remittance(db, "Maggie_Summers", "Lonnie_Bishop", "bitcoin", 6)
# bnk_api.increase_balance(db, "Dwayne_Spencer", "dollars", 100.8)
# users_api.add_field_regist_date(db)

# stat.get_bitcoin_price_statistic()
btc_p.add_new_bitcoin_price(db)