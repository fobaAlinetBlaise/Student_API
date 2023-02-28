from django.db import models

class ClassRoom(models.Model):
    class_name = models.CharField('ClassRoom Name', max_length=30)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.class_name

class Teacher(models.Model):
    name = models.CharField('Name', max_length=120)
    gender = models.CharField('Gender', max_length=20)
    email = models.CharField('Email Address', max_length=120)
    description = models.TextField(blank=True)
    classRoom = models.ManyToManyField(ClassRoom, blank=False)
    image = models.ImageField(upload_to='image' ,blank=True ,null=True)

        
    def __str__(self):
        return self.name

class Coures(models.Model):
    course_name = models.CharField('Coures Name', max_length=120)
    coefficiant = models.IntegerField(blank=True, null=True)
    description = models.TextField(blank=True)
    teachers = models.ForeignKey(Teacher, blank=False, null=False, related_name='teachers', on_delete=models.CASCADE)

    def __str__(self):
        return self.course_name



class Student(models.Model):
    name = models.CharField('Name', max_length=120)
    gender = models.CharField('Gender', max_length=20)
    email = models.CharField('Email Address', max_length=120)
    classRoom = models.ForeignKey(ClassRoom, blank=False, null=False, on_delete=models.CASCADE)
    description = models.TextField(blank=True)
    courses = models.ManyToManyField(Coures, blank=False, through='Bulletin')
    image = models.ImageField(upload_to='image',blank=True, null=True)

        
    def __str__(self):
        return self.name

class Bulletin(models.Model):
    note = models.FloatField(blank=True, null=True, default=0.0)
    obs = models.TextField('observation', blank=True)
    matieres = models.ForeignKey(Coures, blank=False, null=False, on_delete=models.CASCADE) 
    etudiants = models.ForeignKey(Student, blank=False, null=False, on_delete=models.CASCADE)


class Fees(models.Model):
    nom_etudiant = models.ForeignKey(Student, blank=False, null=False, on_delete=models.CASCADE)
    mois = models.IntegerField(blank=True, null=True)
    montant = models.IntegerField(blank=True, null=True) 
    