import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
       titulo: 'Prueba',
       icono: 'mdi mdi-gauge',
       submenu: [
         {
           titulo: 'Dashboard', url: '/dashboard'
         },
         {
           titulo: 'ProgresBar', url: '/progress'
         },
         {
           titulo: 'Gráficas', url: '/graficas1'
         }
       ]
    }
  ];
    constructor() { }
}
