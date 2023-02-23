import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLenght'
})
export class MaxLenghtPipe implements PipeTransform {

  transform(texto: string): string {
    if (texto.length > 100){
      texto = texto.slice(0, 100)
      texto += " ..."
    }
    return texto
  }

}
