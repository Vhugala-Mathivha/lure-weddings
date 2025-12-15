from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Service, GalleryImage, VowDraft
from .serializers import ServiceSerializer, GalleryImageSerializer, VowDraftSerializer

class HealthView(APIView):
    def get(self, request):
        return Response({"status": "ok"})

class ServiceListView(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class GalleryListView(generics.ListAPIView):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer

class InspirationView(APIView):
    def post(self, request):
        prompt = request.data.get("prompt", "")
        return Response({
            "prompt": prompt,
            "image_url": "https://images.unsplash.com/photo-1520854221050-0f4caff449fb?auto=format&fit=crop&w=1200&q=80",
            "description": "Soft blush florals with golden hour lighting."
        })

class VowView(APIView):
    def post(self, request):
        prompt = request.data.get("prompt", "")
        generated = (
            "From the moment I saw you, I knew our story would be my favorite. "
            "Today, I promise to choose you in every season and to love you with grace and wonder."
        )
        draft = VowDraft.objects.create(prompt=prompt, result_text=generated)
        return Response(VowDraftSerializer(draft).data, status=status.HTTP_201_CREATED)