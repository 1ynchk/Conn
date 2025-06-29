from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Switches
from .serializer import SwitchSerializer

# Create your views here.
@api_view(['GET'])
def check_switch(request):
    '''Возвращает объект свитча'''
    
    switch = request.query_params.get('switch')
    queryset = Switches.objects.prefetch_related('ports').filter(name__icontains=switch) 
    serialized_queryset = SwitchSerializer(queryset, many=True).data
    
    return Response({'status': 'ok', 'comment': 'success', 'data': serialized_queryset})