import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeAlumnoPageRoutingModule } from './make-alumno-routing.module';

import { MakeAlumnoPage } from './make-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeAlumnoPageRoutingModule,
    //agregar
    ReactiveFormsModule
    
  ],
  declarations: [MakeAlumnoPage]
})
export class MakeAlumnoPageModule {}
