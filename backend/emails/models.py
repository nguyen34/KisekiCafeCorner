from django.db import models

# Create your models here.


class EmailMessages(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    date_received = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name + " - " + self.email
