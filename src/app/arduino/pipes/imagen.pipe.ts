import { Pipe, PipeTransform } from '@angular/core';
import { Modulo } from '../interfaces/arduino.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(modulo: Modulo, ...args: unknown[]): string {
    return `assets/EsquemaFinal/${modulo.id}.jpg`;
  }

}
