from django.urls import include, path
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tasks import views

router = routers.DefaultRouter()
router.register(r"tasks", views.TaskView, "tasks")
router.register(r"labels", views.LabelViewSet, "labels")

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title='Django Tasks CRUD API'))
]