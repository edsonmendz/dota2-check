import { Injectable } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Pipe({
  name: 'tempoFormat'
})


export class TempoPipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || value === undefined || isNaN(value)) {
      return '00:00:00'; // Se o valor for inválido, retorna 00:00:00
    }

    const horas = Math.floor(value / 3600);
    const minutos = Math.floor((value % 3600) / 60);
    const segundos = Math.floor(value % 60);
    let horasStr = this.formatarNumero(horas);

    if( horas == 0) {
      horasStr = ''
    }else {
      horasStr = this.formatarNumero(horas) + ':';
    }

    
    const minutosStr = this.formatarNumero(minutos);
    const segundosStr = this.formatarNumero(segundos);

    return `${horasStr}${minutosStr}:${segundosStr}`;
  }

  private formatarNumero(numero: number): string {
    return numero < 10 ? `0${numero}` : numero.toString();
  }
}