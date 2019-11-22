from rest_framework import serializers

from crypto_wallet_server.database import db, to_mongo, get_bank_account

class BankAccountSerializer(serializers.Serializer):
    _id = serializers.UUIDField(read_only=True)
    user_id = serializers.CharField(required=True)

    class Meta:
        fields = ['_id', 'user_id']

    def create(self, validated_data):
        _id = db.bank_accounts.insert_one(to_mongo(validated_data)).inserted_id
        return get_bank_account({'_id': _id})

    def update(self, instance, validated_data):
        for field, value in validated_data.items():
            setattr(instance, field, value)
        return instance
