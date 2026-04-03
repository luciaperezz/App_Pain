import { Component, OnInit } from '@angular/core';
import { DiarioService } from '../../services/diario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  mensaje: string = "Usuario"; // se actualizará con el nombre real
  fechaActual: string = "";
  ultimoDolor: number = 0;

  constructor(
    private diarioService: DiarioService,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit() {
    // Capturar el nombre del usuario
    this.rutaActiva.queryParams.subscribe(params => {
      if (params['userNombre']) {
        this.mensaje = params['userNombre'];
      }
    });

    // Fecha actual
    const hoy = new Date();
    this.fechaActual = hoy.toLocaleDateString('es-ES', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'numeric', 
      day: 'numeric' 
    });

    // Último nivel de dolor
    const entradas = this.diarioService.obtenerEntradas();
    if (entradas.length > 0) {
      this.ultimoDolor = entradas[entradas.length - 1].nivelDolor;
    }
  }

  nivelDolorColor(dolor: number): string {
    if(dolor <= 3) return 'green';
    if(dolor <= 7) return 'orange';
    return 'red';
  }
}