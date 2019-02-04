from django.db import models
# Create your models here.


class Department(models.Model):
    dept_id=models.CharField(max_length=20,primary_key=True,auto_created=True)
    dept_name=models.CharField(max_length=20)
    dept_HOD=models.CharField(max_length=20)

    def __str__(self):
        return self.dept_id
class Course(models.Model):
    course_id=models.CharField(max_length=20,primary_key=True,auto_created=True)
    course_name=models.CharField(max_length=20)
    dept_id=models.CharField(max_length=20)

    def __str__(self):
        return self.course_id
class Subject(models.Model):
    subject_id=models.CharField(max_length=20,primary_key=True,auto_created=True)
    subject_name=models.CharField(max_length=100)
    course_id=models.CharField(max_length=10)


class Student(models.Model):
    roll_no = models.IntegerField(primary_key=100)
    first_name = models.CharField(max_length = 100)
    last_name = models.CharField(max_length = 100)
    father_name =models.CharField(max_length = 100)
    mother_name =models.CharField(max_length = 100)
    bdate = models.CharField(max_length=100)
    student_email = models.CharField(max_length = 100)
    password = models.CharField(max_length = 100)
    gender = models.CharField(max_length = 6)
    country = models.CharField(max_length = 20)
    city = models.CharField(max_length = 20)
    address = models.CharField(max_length = 300)
    contactno = models.CharField(max_length=10)


class user_login(models.Model):
    user_email=models.CharField(max_length=50,primary_key=True)
    user_password=models.CharField(max_length=50)
    #roll_no=models.ForeignKey(Student,on_delete=models.CASCADE)

    def __str__(self):
        return self.user_email



