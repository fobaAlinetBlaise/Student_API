
from dataclasses import fields
from rest_framework import serializers
from .models import ClassRoom, Coures, Teacher, Student, Bulletin

class ClassRoomSerialiser(serializers.ModelSerializer):
    class Meta:
        model = ClassRoom
        fields = ("id", "class_name", "description")
        
class ReadTeacherSerialiser(serializers.ModelSerializer):
    classRoom = ClassRoomSerialiser(read_only=True, many=True)
    class Meta:
        model = Teacher
        fields = ("id", "name", "gender", "email", "description", "classRoom", "image")

class WriteTeacherSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ("id", "name", "gender", "email", "description", "classRoom", "image")
        
class WriteStudentSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ("id", "name", "gender", "email", "classRoom", "description", "courses", "image")
        
class ReadCoureSerialiser(serializers.ModelSerializer):
    teachers = ReadTeacherSerialiser()
    class Meta:
        model = Coures
        fields = ("id", "course_name", "coefficiant", "description", "teachers")

class WriteCoureSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Coures
        fields = ("id", "course_name", "coefficiant", "description", "teachers")
        
        
class ReadStudentSerialiser(serializers.ModelSerializer):
    classRoom = ClassRoomSerialiser()
    courses = ReadCoureSerialiser(read_only=True, many=True)
    class Meta:
        model = Student
        fields = ("id", "name", "gender", "email", "classRoom", "description", "courses", "image")
        
class BulletinSerialiser(serializers.ModelSerializer):
    etudiants = ReadStudentSerialiser()
    class Meta:
        model = Bulletin
        fields = ("id", "note", "obs", "matieres", "etudiants")