from django.urls import path
from .views import (
    HealthView,
    ServiceListView,
    GalleryListView,
    InspirationView,
    VowView,
)

urlpatterns = [
    path("health/", HealthView.as_view()),
    path("services/", ServiceListView.as_view()),
    path("gallery/", GalleryListView.as_view()),
    path("inspiration/", InspirationView.as_view()),
    path("vows/", VowView.as_view()),
]