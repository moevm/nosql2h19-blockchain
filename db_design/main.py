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
                "e-mail"        : login + "@gmail.com",
                "permission"    : "user",
                "bank_account"  : None
            }
        )
    return list_users

def add_new_user(user):
    init_bank_account = { "bitcoin" : 0, "dollars" : 0, "rubles" : 0}
    user["bank_account"] = db.bank_accounts.insert_one(init_bank_account).inserted_id
    if db.users.insert_one(user).acknowledged:
        print("The user added successful")
    else:
        print("The user was not add")


def delete_user_by_login(login):
    if login != "admin" :
        if db.users.find_one_and_delete({"login": login}, projection={'_id': False}) == None:
            print("User isn't exist!")
        else:
            print("User deleted successful")
    else:
        print("U can't delete administrator")

def login_is_exist(login):
    if db.users.find_one({"login": login}) != None:
        return True
    else:
        return False

def update_user_data(login, password=None, e_mail=None):
    user = db.users.find_one({"login": login})
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


def setup_collection_users():
    db.users.create_index([("login", pymongo.ASCENDING)], unique=True) #make required fields


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

test_user = {
    "login"         : "test_user",
    "password"      : "sdasd",
    "permission"    : "user",
    "bank_account"  : None,
    "e-mail"        : "test_user@gmail.com"
}

# add_new_user(test_user)
# delete_user_by_login("Mae_Flores")
# login_n = "admin"
# print("login",  login_n,  "is exist : ", login_is_exist(login_n))
update_user_data("Crystal_Armstrong", "newpass3dasd", "fdf222@gmail.com")