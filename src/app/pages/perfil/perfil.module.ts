import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';
import { PerfilPage } from './perfil.page';
//import { EditPerfilModalPage } from '../modals/edit-perfil-modal/edit-perfil-modal.page'; // nuevo modal

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // necesario para modal con formulario
    IonicModule,
    PerfilPageRoutingModule
  ],
  declarations: [
    PerfilPage,
    //EditPerfilModalPage // declarar modal
  ]
})
export class PerfilPageModule {}

