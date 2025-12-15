from rest_framework import serializers
from .models import Service, GalleryImage, VowDraft

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = "__all__"

class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = "__all__"

class VowDraftSerializer(serializers.ModelSerializer):
    class Meta:
        model = VowDraft
        fields = "__all__"