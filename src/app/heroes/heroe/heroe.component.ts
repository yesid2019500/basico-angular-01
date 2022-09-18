import { Component } from '@angular/core'

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})


export class HeroeComponent {

    nombre: string = 'Iroman';
    edad: number = 31;

    //este es un getter get este es como crearme un metodo que cuando la llame sera
    // procesada, por ejemplo en este caso retorna volver en mayusculas cualquir nombre

    get nombreCapitalizado():string {
        return this.nombre.toUpperCase()
    }

    // estamos diciendo que va retornar un string
    obtenerNombre():string {
            return `${this.nombre} - ${this.edad}`
    }

    // void que no devuelve nada
    cambiarNombre():void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad() :void  {
        this.edad = 32
    }
}