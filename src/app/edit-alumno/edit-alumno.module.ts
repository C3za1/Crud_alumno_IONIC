import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAlumnoPageRoutingModule } from './edit-alumno-routing.module';

import { EditAlumnoPage } from './edit-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditAlumnoPageRoutingModule,

    //agregar
    ReactiveFormsModule
  ],
  declarations: [EditAlumnoPage]
})
export class EditAlumnoPageModule {}
