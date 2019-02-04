from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
import backend

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('backend.api.urls'))
]
