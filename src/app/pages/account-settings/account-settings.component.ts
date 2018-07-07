import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document,
              public _ajustes: SettingsService) { }

  ngOnInit() {
  }

cambiarColor(color: string, link: any ) {

  this._document.getElementById('tema').setAttribute('href', 'assets/css/colors/' + color + '.css');

  this._ajustes.ajustes.tema = color;
  this._ajustes.ajustes.temaUrl = 'assets/css/colors/' + color + '.css';
  this._ajustes.guardarAjustes();

  this.cambiarCheck(link);


}

cambiarCheck(link: any) {

 let selectores: any = document.getElementsByClassName('selector');

 for ( let element of selectores ) {
   element.classList.remove('working');
 }

  link.classList.add('working');

}

}
