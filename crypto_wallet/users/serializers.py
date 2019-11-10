from rest_framework import serializers


class UserSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=64, required=True)
    # email = serializers.CharField(max_length=64, required=True)
    # password = serializers.HiddenField(required=True)
    # registration_date = serializers.DateTimeField(required=True)
    # permission = serializers.CharField(max_length=64, required=True)

    class Meta:
        fields = ['username', 'email', 'registration_date', 'permission']

    def create(self, validated_data):
        user_id = db.users.insert_one(**validated_data).inserted_id
        return db.wallets.insert_one({'owner_id': user_id}).acknowledged

    def update(self, instance, validated_data):
        for field, value in validated_data.items():
            setattr(instance, field, value)
        return instance
