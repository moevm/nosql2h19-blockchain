from bigchaindb_driver import BigchainDB
from bigchaindb_driver.crypto import generate_keypair
from datetime import date, datetime

bdb_root_url = "http://localhost:9984"

bdb = BigchainDB(bdb_root_url)

def make_transaction(owner, new_owner, transaction_asset, transaction_asset_metadata):

    prepared_creation_tx = bdb.transactions.prepare(
        operation   = 'CREATE',
        signers     = owner.public_key,
        asset       = transaction_asset,
        metadata    = transaction_asset_metadata
    )

    fulfilled_creation_tx = bdb.transactions.fulfill(
        prepared_creation_tx,
        private_keys = owner.private_key
    )

    sent_creation_tx = bdb.transactions.send_commit(fulfilled_creation_tx)

    txid = fulfilled_creation_tx['id']

    asset_id = txid

    transfer_asset = {
        'id': asset_id
    }

    output_index = 0
    output = fulfilled_creation_tx['outputs'][output_index]

    transfer_input = {
        'fulfillment': output['condition']['details'],
        'fulfills': {
            'output_index': output_index,
            'transaction_id': fulfilled_creation_tx['id']
        },
        'owners_before': output['public_keys']
    }

    prepared_transfer_tx = bdb.transactions.prepare(
        operation   = 'TRANSFER',
        asset       = transfer_asset,
        inputs      = transfer_input,
        recipients  = new_owner.public_key,
    )

    fulfilled_transfer_tx = bdb.transactions.fulfill(
        prepared_transfer_tx,
        private_keys = owner.private_key,
    )

    sent_transfer_tx = bdb.transactions.send_commit(fulfilled_transfer_tx)

# print("Is Bob the owner?",
#     sent_transfer_tx['outputs'][0]['public_keys'][0] == new_owner.public_key)

# print("Was Alice the previous owner?",
#     fulfilled_transfer_tx['inputs'][0]['owners_before'][0] == owner.public_key)

######################### usage example #############################
owner, new_owner = generate_keypair(), generate_keypair()

for i in range(2):
    transaction_asset = {
        "data" : {
            "currency"  : "RUB",
            "value"     : i*20000
        }
    }

    transaction_asset_metadata = {
        "date" : datetime.utcnow().isoformat(),
    }

    make_transaction(owner, new_owner, transaction_asset, transaction_asset_metadata)