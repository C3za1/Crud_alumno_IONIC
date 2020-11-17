import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnoService } from '../shared/alumno.service';

@Component({
  selector: 'app-make-alumno',
  templateUrl: './make-alumno.page.html',
  styleUrls: ['./make-alumno.page.scss'],
})
export class MakeAlumnoPage implements OnInit {

  bookingForm: FormGroup;

  constructor(
    private aptService: AlumnoService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
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
  }

  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } 
    else {
      this.aptService.createBooking(this.bookingForm.value).then(res => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
}
