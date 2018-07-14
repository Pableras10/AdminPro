import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subs: Subscription;

  constructor() {

  }

  ngOnInit() {

    this.subs = this.constructorObservable()
    .subscribe (
      numero => console.log ('Subs ', numero),
      error => console.error('Errorrr ', error),
      () => console.log(' Subscripción terminada')
    );
  }

  ngOnDestroy() {

    console.log('Cierro página');
    this.subs.unsubscribe();

  }

  constructorObservable(): Observable<any> {

    let obs: Observable<any> = new Observable( observer => {

      let contador = 0;

    setInterval( () => {
        contador = contador + 1;

        observer.next(contador);

        if (contador === 15) {
            observer.complete();
        }
        if (contador === 14) {
          observer.error('Fallo');
        }


    }, 1000);

  });

    return obs;


  }

}
