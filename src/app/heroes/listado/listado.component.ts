import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

  heroes: string[] = ['Hulk', 'Iroman', 'Spiderman', 'Thor']
  heroDelete: string = ''

  borrarHeroe() {
    // si retorna undefinde devolvemos un ''
    this.heroDelete = this.heroes.shift() || '';
    // this.heroDelete = heroeBorrado
   
    
  }

  // este se ejecuta antes de que el componente se renderize
  // tanto el constructor como ngOnInit hacen parte del ciglo de vida de Angular

  // constructor() { 
  //   console.log('constructor');
    
  // }

  // ngOnnit se utliza la mayor partde del tiempo para inicializar algo, como peticiones etc

  // ngOnInit(): void {
  //   console.log('ngOnInit');
  // }

}
