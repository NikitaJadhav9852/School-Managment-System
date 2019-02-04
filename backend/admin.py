from django.contrib import admin

# Register your models here.
from .models import *
admin.site.register(Student)
admin.site.register(user_login)
admin.site.register(Department)
admin.site.register(Course)
admin.site.register(Subject)
