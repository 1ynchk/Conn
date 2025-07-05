from django.db.models import Q

from devices.models import Devices
from connection.models import Connections
from switches.models import Switches, Port
from staff.models import Staff

def adding_terminal(type_terminal, mac_or_sr, given_to, name_terminal, connection):
    '''
        Добавляет подключениe, 
        возвращает словарь с объектом терминала
    '''

    try:
        conn = Connections.objects.select_related('user').get(id=connection['id'])
    except Exception:
        return {'obj': None, 'is_conn': False, 'is_new': False} 

    try:
        if type_terminal == 'C-DATA FD511G-X':
            obj = Devices.objects.get(serial_number=mac_or_sr)
        else:
            obj = Devices.objects.get(mac_addr=mac_or_sr)
        return {'obj': obj, 'is_conn': True, 'is_new': False, }
    except Exception:

        try:
            staff = Staff.objects.get(id=given_to)
        except Exception:
            staff = Staff.objects.all()[0] # Значение по умолчанию

        if type_terminal == 'C-DATA FD511G-X':
            obj = Devices(
                name=name_terminal,
                model=type_terminal,
                serial_number=mac_or_sr,
                given_to=staff,
                user=conn.user
                )
        else:
            obj = Devices(
                name=name_terminal,
                model=type_terminal,
                mac_addr=mac_or_sr,
                given_to=staff,
                user=conn.user
                )

        obj.save()

        return {'obj': obj, 'is_conn': True, 'is_new': True}

def adding_connection(connection, switch, port, vlan):
    '''
        Добавление подключения
    '''

    examination = {
            'check_switch': False,
            'check_port': False,
            'check_vlan': False
            }

    try: 
        switch = Switches.objects.get(id=switch['id'])
    except Exception:
        return examination
    
    examination['check_switch'] = True

    try:
        port = switch.ports.get(id=port['id'])
    except Exception:
        return examination

    examination['check_port'] = True

    try:
        vlan_obj = Connections.objects.get(vlan=vlan)
        return examination
    except Exception:
        pass

    examination['check_vlan'] = True

    conn = Connections.objects.select_related('user').get(id=connection['id'])

    conn.vlan = vlan
    conn.name = vlan
    conn.save()

    port.connections.add(conn)

    return examination

    
