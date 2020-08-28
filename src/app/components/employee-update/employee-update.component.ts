import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css'],
})
export class EmployeeUpdateComponent implements OnInit {
  employee = [];
  id: number;

  employeeFomr = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    docType: new FormControl('', Validators.required),
    docNumber: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
  });

  constructor(
    private _employeeService: EmployeesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.id = params['id'];

      this._employeeService.getEmployee(this.id).subscribe((employee) => {
        this.employee = employee['data']['employee'][0];
        console.log(this.employee);
        this.setValues();
      });
    });
  }

  setValues() {
    this.employeeFomr.get('name').setValue(this.employee['nombres']);
    this.employeeFomr.get('surname').setValue(this.employee['apellidos']);
    this.employeeFomr
      .get('docType')
      .setValue(this.employee['tipoIdentificacion']);
    this.employeeFomr
      .get('docNumber')
      .setValue(this.employee['numeroIdentificacion']);
    this.employeeFomr.get('salary').setValue(this.employee['salarioMensual']);
    this.employeeFomr.get('email').setValue(this.employee['correoElectronico']);
  }

  onSubmit() {
    const {
      name,
      surname,
      docType,
      docNumber,
      salary,
      email,
    } = this.employeeFomr.value;

    const newEmployee = {
      nombres: name,
      apellidos: surname,
      tipoIdentificacion: docType,
      numeroIdentificacion: docNumber,
      correoElectronico: email,
      salarioMensual: salary,
    };

    this._employeeService
      .updateEmployee(this.id, newEmployee)
      .subscribe((success) => {
        alert("Empleado actualizado con éxito!")
      });
  }
}
