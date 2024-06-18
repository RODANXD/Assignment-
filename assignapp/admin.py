from django.contrib import admin
from .import models as md
# Register your models here.
class profileAdmin(admin.ModelAdmin):
    list_display = ("id","end_year","intensity","sector","topic","insight","url","region","start_year","impact","added","published","country","relevance","pestle","source","title","likelihood")
    
# class userimgAdmin(admin.ModelAdmin):
#     list_display = ("image")
    
    
    
    # at last this class

admin.site.register(md.Insight, profileAdmin)
