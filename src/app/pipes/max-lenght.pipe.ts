import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLenght'
})
export class MaxLenghtPipe implements PipeTransform {

  transform(texto: string): string {
    if (texto.length > 200){
      texto = texto.slice(0, 200)
      texto += " ..."
    }
    return texto
  }

}
