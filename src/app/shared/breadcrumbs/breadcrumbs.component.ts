import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

titulo: string;

  constructor( private router: Router,
               private title: Title) {

      this.devuelveTitulo().subscribe(
         data => { this.titulo = data.titulo;
                  this.title.setTitle(this.titulo);
      });
    }



  ngOnInit() {

  }

  devuelveTitulo() {
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd ),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map( (evento: ActivationEnd) => evento.snapshot.data )

    );
  }

}
