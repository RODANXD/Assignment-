from django.db import models
from django.utils import timezone
import datetime

class Insight(models.Model):
    class Meta:
        db_table = "jsondata"
    added = models.DateTimeField(default=timezone.now)
    published = models.DateTimeField(default=timezone.now)
    id = models.AutoField(primary_key=True)
    end_year = models.CharField(max_length=10, blank=True)
    intensity = models.IntegerField()
    sector = models.CharField(max_length=100)
    topic = models.CharField(max_length=100)
    insight = models.TextField()
    url = models.URLField()
    region = models.CharField(max_length=100)
    start_year = models.CharField(max_length=10, blank=True)
    impact = models.CharField(max_length=100, blank=True)
    added = models.DateTimeField()
    published = models.DateTimeField()
    country = models.CharField(max_length=100)
    relevance = models.IntegerField()
    pestle = models.CharField(max_length=100)
    source = models.CharField(max_length=100)
    title = models.CharField(max_length=255)
    likelihood = models.IntegerField()

