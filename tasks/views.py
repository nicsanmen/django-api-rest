from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Create your views here.


class TaskView(viewsets.ViewSet):
    serializer_task = TaskSerializer
    querySet = Task.objects.all()