import { Injectable } from '@angular/core';

import { alumno } from '../shared/alumno';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }


  // Create
  createBooking(alumno: alumno) {
    return this.bookingListRef.push({
      //name: alumno.name,
      //email: alumno.email,
      //mobile: alumno.mobile

      nombre: alumno.nombre,
      apellidoPaterno: alumno.apellidoPaterno,
      apellidoMaterno: alumno.apellidoMaterno,
      edad: alumno.edad,
      fechaNacimiento: alumno.fechaNacimiento,
      gradoEstudios: alumno.gradoEstudios,
      curp: alumno.curp,
      estado: alumno.estado,
      ciudad: alumno.ciudad,
      nombreDpadreOtutor: alumno.nombreDpadreOtutor,
      numeroCelular: alumno.numeroCelular


    })
  }

  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/alumno/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/alumno');
    return this.bookingListRef;
  }

  // Update
  updateBooking(id, alumno: alumno) {
    return this.bookingRef.update({
      //name: alumno.name,
      //email: alumno.email,
      // mobile: alumno.mobile

      nombre: alumno.nombre,
      apellidoPaterno: alumno.apellidoPaterno,
      apellidoMaterno: alumno.apellidoMaterno,
      edad: alumno.edad,
      fechaNacimiento: alumno.fechaNacimiento,
      gradoEstudios: alumno.gradoEstudios,
      curp: alumno.curp,
      estado: alumno.estado,
      ciudad: alumno.ciudad,
      nombreDpadreOtutor: alumno.nombreDpadreOtutor,
      numeroCelular: alumno.numeroCelular
    })
  }

  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/alumno/' + id);
    this.bookingRef.remove();
  }
}