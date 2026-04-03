import { Component, OnInit } from '@angular/core';
import { DiarioService, DiarioEntry } from '../../services/diario.service';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.page.html',
  styleUrls: ['./diario.page.scss'],
})
export class DiarioPage implements OnInit {

  nivelDolor: number = 5;
  medicacion: string = '';

  constructor(private diarioService: DiarioService) { }

  ngOnInit() { }

  nivelDolorColor(dolor: number): string {
  if(dolor <= 3) return 'success';  // verde
  if(dolor <= 7) return 'warning';  // naranja
  return 'danger';                   // rojo
  }

  guardarEntrada() {
    const entry: DiarioEntry = {
      fecha: new Date().toLocaleDateString('es-ES'),
      nivelDolor: this.nivelDolor,
      medicacion: this.medicacion
    };

    this.diarioService.agregarEntrada(entry);
    alert('Entrada guardada ✅');
    this.medicacion = '';
  }
}