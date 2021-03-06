"""crypto_wallet URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from django.views.generic.base import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html'), name='base'),
    path('login', TemplateView.as_view(template_name='index.html'), name='base'),
    path('register', TemplateView.as_view(template_name='index.html'), name='base'),
    path('wallet', TemplateView.as_view(template_name='index.html'), name='base'),
    path('api/v0/jwt_auth/', include('rest_framework_jwt.urls')),
    path('api/v0/users/', include('users.urls')),
    path('api/v0/transactions/', include('transactions.urls')),
    path('api/v0/bank_accounts/', include('bank_accounts.urls')),
]
