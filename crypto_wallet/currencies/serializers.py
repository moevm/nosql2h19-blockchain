from rest_framework import serializers


class CurrencySerializer(serializers.Serializer):
    name = serializers.CharField(max_length=64, required=True)
    code = serializers.IntegerField(required=True)
    stock_name = serializers.CharField(max_length=64, required=True)


    def create(self, validated_data):
        user = db.users.insert_one(**validated_data).inserted_id
        return db.bank_accounts.insert_one(user).acknowledged

    def update(self, instance, validated_data):
        for field, value in validated_data.items():
            setattr(instance, field, value)
        return instance
