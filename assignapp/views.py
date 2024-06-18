from django.shortcuts import render
from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import login
from django.views.decorators.csrf import csrf_protect
from rest_framework.views import APIView
from knox.auth import TokenAuthentication
from knox.models import AuthToken
from knox.views import LoginView as KnoxLoginView
from rest_framework import generics
from rest_framework import permissions
from rest_framework import status
from rest_framework.authtoken.serializers import AuthTokenSerializer
from django.http import HttpResponse,StreamingHttpResponse
from django.contrib.auth.models import User
from django.contrib import auth

from .import models as md
from django.core.files.uploadedfile import InMemoryUploadedFile
from rest_framework.parsers import MultiPartParser, FormParser
import io
from django.http import HttpResponse
from django.http import JsonResponse
import datetime
from .models import Insight

def insightapi(request):
    variable = md.Insight.objects.all().values() 
    return JsonResponse(list(variable), safe=False)

new_insight = Insight(
    # other fields...
    added=datetime.datetime.now(),  # or any other method to create a datetime object
    published=datetime.datetime.now(),
)
new_insight.save()
# class insight(generics.GenericAPIView):
#     def get(self,request,*args,**kwargs):
#         prof = md.userProfile.objects.filter(userId = request.user.id ).first()
#         data ={}
#         data = {"userId":prof.userId,
#                 "Prof_username": prof.Prof_username, 
#                 "email":prof.email,
#                 "gender": prof.gender,
#                 "departmentID": prof.departmentID,
#                 "address": prof.address,
#                 "mobileNo": prof.mobileNo,
#                 }
#         return Response({"data" : data},status=status.HTTP_200_OK)