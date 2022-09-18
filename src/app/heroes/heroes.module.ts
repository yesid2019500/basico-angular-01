import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // estamos diciendo que lo que va qui es publico
    exports: [
        ListadoComponent
    ],
    // en los imports soo van modulos
    imports: [
// este modulo nos ofrece las directivas como *ngFor etc
// NOTA: sin este modulo no funcionan las directivas
         CommonModule
    ]
})
export class HeroesModule {

}