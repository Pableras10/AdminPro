import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda = 'Leyenda';
  @Input() progreso = 50;

  @Output() valorProgreso: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log('progreso', this.progreso);
   }

  ngOnInit() {
  }

  cambiarValor(valor) {

    this.progreso = this.progreso + valor;
    this.valorProgreso.emit( this.progreso);

  }

}
