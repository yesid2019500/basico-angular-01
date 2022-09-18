import { Component  } from '@angular/core'

// el decorador es para convertit la clase en un component
// de angular
// el app-contador es como si fuera la llave del componente para mostrar
// lo en el app.component

@Component({
    selector:'app-contador',
    template: `
    <h1> La base es : <strong> {{ base }} </strong></h1>
    <button (click)="acumular(+base)" > + {{base}} </button>
    <h4>Contador : {{ numero }} </h4>
    <button  (click)="acumular(-base)" > - {{ base }} </button>

    `
})


// las propiedades number y metodos los estamos usando
// en el template

export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
  
    acumular(valor:number){
      this.numero += valor 
    }
}