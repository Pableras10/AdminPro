import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
     tema: 'default',
     temaUrl: 'assets/css/colors/default.css'
  };

  constructor() {
    this.obtenerAjustes();
   }

guardarAjustes() {
  localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
}

obtenerAjustes() {
  if (localStorage.getItem('ajustes')) {
    this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
  }

  }
}

interface Ajustes {
 tema: string;
 temaUrl: string;
}

