import { Component, OnInit } from '@angular/core';
import { DiarioService, DiarioEntry } from '../../services/diario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  perfil = {
    nombre: 'Usuario', // se actualizará con el nombre real
    apellidos: '',     // opcional, puedes dejar vacío o agregar info del login
    sexo: 'M',
    fechaNacimiento: '01/01/1990',
    tratamiento: 'Quimioterapía Cáncer de Colón',
    fechaInicio: '01/03/2026',
    intensidad: 5
  };

  historial: DiarioEntry[] = [];

  constructor(
    private diarioService: DiarioService,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit() {
    // Capturar el nombre del usuario desde los queryParams
    this.rutaActiva.queryParams.subscribe(params => {
      if (params['userNombre']) {
        this.perfil.nombre = params['userNombre'];
      }
    });

    // Obtener el historial de dolor
    this.historial = this.diarioService.obtenerEntradas();
  }

  nivelDolorColor(dolor: number): string {
    if(dolor <= 3) return 'success';
    if(dolor <= 7) return 'warning';
    return 'danger';
  }
}