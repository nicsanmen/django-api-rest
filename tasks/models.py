from django.db import models

# Create your models here.

class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=500, blank=True)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title, self.description, self.completed
    
