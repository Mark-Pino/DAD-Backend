import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Modulos',
    title: true
  },
  {
    name: 'Configuracion',
    url: '/dashboard/setup',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Periodo',
        url: '/dashboard/setup/period'
      },
      {
        name: 'persona',
        url: '/dashboard/setup/person'
      }
    ]
  },
  {
    name: 'Evento',
    url: '/dashboard/event',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Evento',
        url: '/dashboard/event/event'
      },
    ]
  },
  {
    name: 'Asistencia',
    url: '/dashboard/attendance',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Asistencia',
        url: '/dashboard/attendance/attendance'
      }
    ]
  }
];
