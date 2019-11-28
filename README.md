# Crypto Wallet #


## Setup ##
1. Python >= 3.6
2. Launch ```./deploy``` to prepare project environment.

## Run ##
##### 1. Start using project environment: #####
```
source .env/bin/activate
```
##### 2. Run Django server: #####
```
./crypto_wallet/manage.py runserver
```
## Manage MongoDB ##
#### Access: ####
- USER = common_user
- PASSWORD = 8FUQRfAaxp7Pgbvw

#### Connect to remote MongoDB locally: ####
```
mongo "mongodb+srv://blockchain-60374.gcp.mongodb.net/admin"  --username <USER>
```
#### Create MongoDB database: ####
https://theholmesoffice.com/how-to-create-a-mongodb-database/
#### Commands ####
- use `<db_name>`
- show collections
- db.users.find()
- db.users.find({'username': 'tolik'})
