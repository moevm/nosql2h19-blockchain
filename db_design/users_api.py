import pymongo 
import json
import random
from datetime import date, datetime
from bigchaindb_driver.crypto import generate_keypair


def get_users_from_file():
    with open("data_src/names", 'r') as file:
        users = file.read()
    return users.splitlines()
    
def generate_users_data():
    users = get_users_from_file()
    list_users = []
    for user in users :
        username = "_".join(user.split(" "))
        list_users.append(
            {
                "username"          : username,
                "password"          : "".join(random.choices("qwertyuiopasdfghjklzxcvbnm1234567890", k=8)),
                "email"             : username + "@gmail.com",
                "permission"        : "user",
                "registration_date" : datetime.utcnow().isoformat()
            }
        )
    return list_users

    #  date.fromordinal(random.randint(735665, 737490))

    # init_bank_account = { "bitcoin" : 0, "dollars" : 0, "rubles" : 0}
def add_new_user(db, user):
    insereted_user = db.users.insert_one(user)
    if insereted_user.acknowledged:
        print("The user added successful")
        keypair = generate_keypair()
        init_bank_account = {
            "user_id" : insereted_user.inserted_id,
            "btc"     : 0,
            "eth"     : 0,
            "ltc"     : 0,
            "usd"     : 0,
            "rub"     : 0,
            "gbr"     : 0,
            "keypair" :
                {
                    "public_key"    : keypair.public_key,
                    "private_key"   : keypair.private_key
                }
        }
        db.bank_accounts.insert_one(init_bank_account)
    else:
        print("The user was not add")

def delete_user_by_username(db, username):
    user = db.users.find_one({"username": username})
    if user == None:
        print("User isn't exist!")
        return

    if user["permission"] != "admin" :
        user_is_deleted = db.users.delete_one({"_id": user["_id"]})
        bank_accounts_is_deletetd = db.bank_accounts.delete_one({"_id": user["bank_account"]})
        if user_is_deleted == None or bank_accounts_is_deletetd == None:
            if user_is_deleted == None:
                print("User wasn't deleted")
            if bank_accounts_is_deletetd == None:
                print("Bank account wasn't deleted")
        else:
            print("User deleted successful")
    else:
        print("U can't delete administrator")


def username_is_exist(db, username):
    if db.users.find_one({"username": username}) != None:
        return True
    else:
        return False

def update_user_data(db, username, password=None, e_mail=None):
    user = db.users.find_one({"username": username})
    if user == None:
        print("Such user does not exist")
        return
    else:
        user_id = user["_id"]
    print(user, user_id)
    if password != None and e_mail != None:
        db.users.update_one({"_id": user_id},
                            {"$set": {"password": password, "e-mail" : e_mail}})
        return
    if password != None:
        db.users.update_one({"_id": user_id},
                            {"$set": {"password": password}})
        return
    if e_mail != None:
        db.users.update_one({"_id": user_id},
                            {"$set": {"e-mail": e_mail}})
        return

    print("Nothing for an update!")


# def add_field_regist_date(db):
#     date_ = datetime.utcnow()
#     db.users.update_many({},
#                          {"$set":
#                             {"registration_date" : date_}
#                          })

def setup_collection_users(db):
    db.users.create_index([("username", pymongo.ASCENDING)], unique=True)
    # make required fields
    # make schema
    
    #db.createCollection("foo", {
    # validator: {
    #     $and: [ {"bar": {$type: "string", $exists: true}} ]
    # })