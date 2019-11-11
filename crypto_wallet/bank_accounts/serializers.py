from rest_framework import serializers


class BankAccountSerializer(serializers.Serializer):
    owner_id = serializers.IntegerField(required=True)

    def create(self, validated_data):
        return db.BankAccounts.insert_one(**validated_data).acknowledged

    def update(self, instance, validated_data):
        for field, value in validated_data.items():
            setattr(instance, field, value)
        return instance
