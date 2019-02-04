from backend.models import user_login,Student
from rest_framework import viewsets
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework import serializers
from django.http import HttpResponse
from django.contrib import messages
from django.shortcuts import render,redirect
from django.http import HttpResponseRedirect


@api_view(['GET', 'POST'])
def StudentViewSet(request, format=None):
    if request.method == 'POST':
        try:
            print(request.data['student_email'])
            s = Student.objects.get(student_email = request.data['student_email'])
            print("already registered")
            return HttpResponse(status=401)
            

        except:
            print("ASDJASD")
            serializer = StudentSerializer(data=request.data)
            print(serializer.is_valid())
            if(serializer.is_valid()):
                serializer.save()
                # messages.success(request, 'Student created successfully.')
                return redirect(request,'www.google.com')
                
            else:
                print("error")

            return HttpResponse("200") 
            
    
@api_view(['GET', 'POST'])
def user_login_check(request, format=None):
    if request.method == 'POST':
            try:
                print(request.data['user_email'])
                print(request.data['user_password'])

                s = Student.objects.get(student_email = request.data['user_email'],password=request.data['user_password'])
                # if(s.password==request.data['user_password']):
                #     print("available")
                # else:
                print("registered")
                return HttpResponse(status=200)
            except:
                print("register first")
                return HttpResponse(status=401)

            

        




# @api_view(['GET', 'POST'])
# def auth(request, format=None):
#     if request.method == 'POST':
#         try:
#             s = Student.objects.get(email = request.data['user_email'], pwd = request.data['user_password'])
#             return HttpResponse(status=401)

#         except:
#             serializer = user_loginSerializer(data = request.data)
#             print(serializer)
#             serializer.is_valid()
#             serializer.save()

#             return HttpResponse("200") 
