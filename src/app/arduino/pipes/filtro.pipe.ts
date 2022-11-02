import { Pipe, PipeTransform } from '@angular/core';
import { Modulo } from '../interfaces/arduino.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(modulo: Modulo[], page: number = 0, search: string = ''): Modulo[] {

    if(search.length === 0){
      return modulo.slice(page, page + 8 );
    }

    const filtered = modulo.filter( modul => modul.practica.toLowerCase().includes( search ) );
    return filtered.slice(page, page + 5);

  }

}
