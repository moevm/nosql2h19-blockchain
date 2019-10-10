import pymongo 
import json
import random

def get_users_from_file():
    with open("names", 'r') as file:
        users = file.read()
    return users.splitlines()
    
def generate_users_data():
    users = get_users_from_file()
    list_users = []
    for user in users :
        login = "_".join(user.split(" "))
        list_users.append(
            {
                "login"         : login,
                "password"      : "".join(random.choices("qwertyuiopasdfghjklzxcvbnm1234567890", k=8)),
                "permission"    : "user",
                "bank_account"  : None,
                "e-mail"        : login + "@gmail.com"
            }
        )
    return list_users

def add_new_user(user):
    init_bank_account = { "bitcoin" : 0, "dollars" : 0, "rubles" : 0}
    user["bank_account"] = db.bank_accounts.insert_one(init_bank_account).inserted_id
    db.users.insert_one(user)

def delete_user(login):
    if login != "admin" :
        db.users.find_one_and_delete({"login": login}, projection={'_id': False})
    else:
        print("U can't delete administrator")

def setup_collection_users():
    db.users.create_index([("login", pymongo.ASCENDING)], unique=True)


# connect to db on the Atlas
client = pymongo.MongoClient(
    "mongodb+srv://akuma:akuma555@blockchain-60374.gcp.mongodb.net/test?retryWrites=true&w=majority"
)

db = client["wallet"]
users_collection = db["users"]
accounts_collection = db["bank_accounts"]

admin = {
    "login"         : "admin",
    "password"      : "GOD",
    "permission"    : "admin",
    "bank_account"  : None,
    "e-mail"        : "admin@gmail.com"
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

# add_new_user(same_user)
# delete_user("admin")