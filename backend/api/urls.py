# from backend.api.views import *
# from rest_framework.routers import DefaultRouter

# from django.urls import include, path

# # router = DefaultRouter()
# # router.register('',StudentViewSet,base_name = 'backend')

# #urlpatterns = router.urls

# urlpatterns=[
#     # path('student/SignUp/',student_registration),
#     path('SignUp/',student_registration),
# ]



from backend.api.views import *
from rest_framework.routers import DefaultRouter

from django.urls import include, path

# router = DefaultRouter()
# router.register('',StudentViewSet,base_name = 'backend')

# urlpatterns = router.urls

urlpatterns=[
    #path('student/login/',auth),
    path('register/',StudentViewSet),
    path('signin/',user_login_check)
]