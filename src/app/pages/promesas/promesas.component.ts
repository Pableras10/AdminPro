import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    let promesa = new Promise( (resolve, reject) => {

      let contador = 0;

      setInterval( () => {
        console.log(contador);
          contador = contador + 1;

          if ( contador === 3 ) {

            resolve('Correcto');
          }

      }, 1000);

    });


    promesa.then(
      // () => console.log('Terminó los 3 sg')
      mensaje => console.log('Terminó ', mensaje)
    )
    .catch ( error => console.error('Todavía no'));

  }

  ngOnInit() {
  }

}
