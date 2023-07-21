from django.db import models

# Create your models here.

class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=500, blank=True)
    completed = models.BooleanField(default=False)
    labels = models.ManyToManyField('Label', related_name='tasks')

    def __str__(self):
        return self.title

class Label(models.Model):
    COLOR_CHOICES = [
        ('red', 'Red'),
        ('blue', 'Blue'),
        ('green', 'Green'),
        ('yellow', 'Yellow'),
        ('orange', 'Orange'),
        ('purple', 'Purple'),
        ('pink', 'Pink'),
        ('brown', 'Brown'),
    ]

    name = models.CharField(max_length=200)
    color = models.CharField(max_length=200, choices=COLOR_CHOICES)

    def __str__(self):
        return self.name
