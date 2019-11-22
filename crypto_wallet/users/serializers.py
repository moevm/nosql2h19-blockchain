from django.conf import settings
from rest_framework import serializers

from crypto_wallet_server.database import db, to_python, get_user
from bank_accounts.serializers import BankAccountSerializer

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
        serializer = BankAccountSerializer(data={'user_id': to_python(user_id)})
        serializer.is_valid(raise_exception=True)
        if serializer.save():
            """calling BankAccountSerializer create(validated_data)"""
        return get_user({'_id': user_id})

    def update(self, instance, validated_data):
        for field, value in validated_data.items():
            setattr(instance, field, value)
        return instance
