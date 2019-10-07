# Crypto Wallet #


## Setup ##
1. Have Python >= 3.6
2. Launch ```./deploy``` to prepare project environment.

## Run ##
1. ```source .env/bin/activate```
2. ```./crypto_wallet/manage.py runserver```
3. Set up DB:
```
./crypto_wallet/manage.py makemigrations
./crypto_wallet/manage.py migrate
```

## Manage MongoDB ##
1. Access:
```
user = common_user
pw = 8FUQRfAaxp7Pgbvw

```
2. Connect to MongoDB locally:
```
mongo "mongodb+srv://blockchain-60374.gcp.mongodb.net/admin"  --username <user>
```
3. Create a MongoDB:
https://theholmesoffice.com/how-to-create-a-mongodb-database/