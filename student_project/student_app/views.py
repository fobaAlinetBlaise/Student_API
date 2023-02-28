from .models import ClassRoom, Coures, Teacher, Student, Bulletin
from rest_framework.viewsets import ModelViewSet
from .serializers import *

class ClassRoomModelViewSet(ModelViewSet):
    queryset = ClassRoom.objects.all()
    def get_serializer_class(self):
        return ClassRoomSerialiser
    
class TeacherModelViewSet(ModelViewSet):
    queryset = Teacher.objects.prefetch_related('classRoom')
    def get_serializer_class(self):
        if self.action in ('list', 'retrieve'):
            return ReadTeacherSerialiser
        return WriteTeacherSerialiser
    
class CoureModelViewSet(ModelViewSet):
    queryset = Coures.objects.all()
    def get_serializer_class(self):
        if self.action in ('list', 'retrieve'):
            return ReadCoureSerialiser
        return WriteCoureSerialiser
    
class StudentModelViewSet(ModelViewSet):
    queryset = Student.objects.prefetch_related('classRoom', 'courses')
    def get_serializer_class(self):
        if self.action in ('list', 'retrieve'):
            return ReadStudentSerialiser
        return WriteStudentSerialiser
       
    
class BulletintModelViewSet(ModelViewSet):
    queryset = Bulletin.objects.all()
    def get_serializer_class(self):
        return BulletinSerialiser