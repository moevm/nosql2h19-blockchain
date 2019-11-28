import pymongo 

def make_remittance(db, user_from, user_to, resources, value_remitt):
    if user_from == user_to:
        print("You can't transfer yourself!")
        return

    instance_user_to = db.users.find_one({"username": user_to})
    if instance_user_to == None:
        print("This user isn't exist")
        return

    instance_user_from = db.users.find_one({"username": user_from})

    if instance_user_from == None:
        print("Error data!")

    bank_account_user_from = db.bank_accounts.find_one({"_id": instance_user_from["bank_account"]})

    if bank_account_user_from[resources] < value_remitt :
        print("Insufficient funds!")
        return
    else:
        db.bank_accounts.update_one({"_id": instance_user_from["bank_account"]},
                                    { "$inc": {resources: -value_remitt}})

    db.bank_accounts.update_one({"_id": instance_user_to["bank_account"]},
                                { "$inc": {resources: value_remitt}})

def increase_balance(db, user, resources, value_remitt):
    instance_user =  db.users.find_one({"username": user})
    if instance_user == None:
        print("Error data!")
        return
    db.bank_accounts.update_one({"user_id": instance_user["_id"]},
                                { "$inc": {resources: value_remitt}})


'''
fuction for update bank account after transaction
'''
# def make_remittance_by_bank_account(db, user_from, user_to, resources, value_remitt):
#     if user_from == user_to:
#         print("You can't transfer yourself!")
#         return

#     bank_account_user_from = db.bank_accounts.find_one({"_id": user_from})

#     if bank_account_user_from[resources] < value_remitt :
#         print("Insufficient funds!")
#         return
#     else:
#         db.bank_accounts.update_one({"_id": instance_user_from["bank_account"]},
#                                     { "$inc": {resources: -value_remitt}})

#     db.bank_accounts.update_one({"_id": instance_user_to["bank_account"]},
#                                 { "$inc": {resources: value_remitt}})