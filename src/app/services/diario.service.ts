import { Injectable } from '@angular/core';

export interface DiarioEntry {
  fecha: string;
  nivelDolor: number;
  medicacion: string;
}

@Injectable({
  providedIn: 'root'
})
export class DiarioService {
  private entradas: DiarioEntry[] = [];

  constructor() {}

  agregarEntrada(entry: DiarioEntry) {
    this.entradas.push(entry);
    console.log('Entrada agregada', entry);
  }

  obtenerEntradas(): DiarioEntry[] {
    return this.entradas;
  }

  obtenerUltimoDolor(): number {
    if(this.entradas.length === 0) return 0;
    return this.entradas[this.entradas.length - 1].nivelDolor;
  }
}