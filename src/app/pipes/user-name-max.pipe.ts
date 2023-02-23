import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userNameMax'
})
export class UserNameMaxPipe implements PipeTransform {

  transform(texto: string): string {
    if (texto.length > 6){
      texto = texto.slice(0, 6)
      texto += "..."
    }
    return texto
  }
}
