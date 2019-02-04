from rest_framework import serializers
from backend.models import *

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('roll_no','first_name','last_name','father_name','mother_name','bdate','student_email','password','gender','country','city','address','contactno')


class user_login_Serializer(serializers.ModelSerializer):
    class Meta:
        model = user_login
        fields = ('user_email','user_password')