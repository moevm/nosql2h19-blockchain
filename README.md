# Crypto Wallet #


## Setup ##
1. Have Python >= 3.6
2. Launch ```./deploy``` to prepare project environment.

## Run ##
1. Start to use the project environment:
```
source .env/bin/activate
```
2. Run Django server:
```
./crypto_wallet/manage.py runserver
```
3. Setup DB:
```
./crypto_wallet/manage.py makemigrations
./crypto_wallet/manage.py migrate
```

## Manage MongoDB ##
#### Access ####
```
user = common_user
pw = 8FUQRfAaxp7Pgbvw

```
#### Connect to MongoDB locally ####
```
mongo "mongodb+srv://blockchain-60374.gcp.mongodb.net/admin"  --username <user>
```
#### Create MongoDB database ####
https://theholmesoffice.com/how-to-create-a-mongodb-database/
