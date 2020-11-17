import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AlumnoService } from './../shared/alumno.service';

@Component({
  selector: 'app-edit-alumno',
  templateUrl: './edit-alumno.page.html',
  styleUrls: ['./edit-alumno.page.scss'],
})
export class EditAlumnoPage implements OnInit {
  updateBookingForm: FormGroup;
  id: any;


  constructor(
    private aptService: AlumnoService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ){
    
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getBooking(this.id).valueChanges().subscribe(res => {
      this.updateBookingForm.setValue(res);
    });
   }

  ngOnInit() {
    this.updateBookingForm = this.fb.group({
      //name: [''],
      //email: [''],
      //mobile: ['']

      nombre: [''],
      apellidoPaterno: [''],
      apellidoMaterno: [''],
      edad: [''],
      fechaNacimiento: [''],
      gradoEstudios: [''],
      curp: [''],
      estado: [''],
      ciudad: [''],
      nombreDpadreOtutor: [''],
      numeroCelular: ['']
    })
    console.log(this.updateBookingForm.value)
  }

  updateForm() {
    this.aptService.updateBooking(this.id, this.updateBookingForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }

}
