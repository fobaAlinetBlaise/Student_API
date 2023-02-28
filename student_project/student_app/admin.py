from django.contrib import admin
from .models import ClassRoom, Coures, Teacher, Student

admin.site.register(ClassRoom)

admin.site.register(Coures)

@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display = ('name', 'gender', 'email', )
    ordering = ('name', )
    search_fields =  ('name', )


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('name', 'gender', 'email', )
    ordering = ('name', )
    search_fields =  ('name', )