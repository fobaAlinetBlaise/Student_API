from django.contrib import admin
from django.urls import path
from student_app import views
from rest_framework import routers
from django.conf.urls.static import static
from django.conf import settings

router = routers.SimpleRouter()
router.register(r'classes', views.ClassRoomModelViewSet, basename='classes')
router.register(r'courses', views.CoureModelViewSet, basename='courses')
router.register(r'teachers', views.TeacherModelViewSet, basename='teachers')
router.register(r'students', views.StudentModelViewSet, basename='students')
router.register(r'bulletins', views.BulletintModelViewSet, basename='bulletins')
#router.register(r'fees', views.FeesModelViewSet, basename='fees')
urlpatterns = [
    path('admin/', admin.site.urls),
   
] + router.urls

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)