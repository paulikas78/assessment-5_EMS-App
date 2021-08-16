from django.db import models


class Ailment(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return f"{self.name}"
    
    
    
class Demographic(models.Model):
    age = models.CharField(max_length=3)
    gender = models.CharField(max_length=1)
    ailment = models.ForeignKey(Ailment, on_delete=models.CASCADE, related_name='demographics')
    zip = models.CharField(max_length=5)
    
    def __str__(self):
        return f"AGE: {self.age}, GENDER: {self.gender}, CHIEF COMPLAINT: {self.ailment}, ZIP CODE: {self.zip}"
      
      
