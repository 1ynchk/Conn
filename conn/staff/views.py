from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Staff
from .serializers import StaffSerializer

@api_view(['GET'])
def get_all_staff(request):
    '''Возвращение всех работников'''

    queryset = Staff.objects.all()
    serialized_queryset = StaffSerializer(queryset, many=True).data

    return Response({'status': 'ok', 'comment': 'success', 'data': serialized_queryset})
