from rest_framework import serializers


class CurrencySerializer(serializers.Serializer):
    username = serializers.CharField(max_length=64, required=True)
    email = serializers.CharField(max_length=64, required=True)
    password = serializers.HiddenField(required=True)
    registration_date = serializers.DateTimeField(required=True)
    permission = serializers.CharField(max_length=64, required=True)


    def create(self, validated_data):
        user = db.users.insert_one(**validated_data).inserted_id
        return db.wallets.insert_one(user).acknowledged

    def update(self, instance, validated_data):
        for field, value in validated_data.items():
            setattr(instance, field, value)
        return instance
