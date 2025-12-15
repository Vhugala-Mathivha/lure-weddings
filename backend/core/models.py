from django.db import models

class Service(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    image_url = models.URLField()
    icon = models.CharField(max_length=120, blank=True)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.title

class GalleryImage(models.Model):
    title = models.CharField(max_length=200)
    alt = models.CharField(max_length=200)
    image_url = models.URLField()
    category = models.CharField(max_length=120, blank=True)

    def __str__(self):
        return self.title

class VowDraft(models.Model):
    prompt = models.TextField()
    result_text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"VowDraft {self.id}"