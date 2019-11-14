from rest_framework import serializers
from crypto_wallet_server import settings
from crypto_wallet_server.database import db, encode_value, to_python


class UserSerializer(serializers.Serializer):
    _id = serializers.UUIDField(read_only=True)
    username = serializers.CharField(max_length=64, required=True)
    email = serializers.CharField(max_length=64)
    password = serializers.CharField(write_only=True, required=True)
    registration_date = serializers.DateTimeField()
    permission = serializers.CharField(max_length=64)

    class Meta:
        fields = ['_id', 'username', 'email', 'password', 'registration_date', 'permission']

    def create(self, validated_data):
        user_id = db.users.insert_one(validated_data).inserted_id
        db.bank_accounts.insert_one({'owner_id': user_id}).acknowledged
        return to_python(db.users.find_one({'_id': user_id}))

    def update(self, instance, validated_data):
        for field, value in validated_data.items():
            setattr(instance, field, value)
        return instance
