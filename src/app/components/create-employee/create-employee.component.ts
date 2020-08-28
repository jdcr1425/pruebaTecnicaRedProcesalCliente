import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  telephoneForm = new FormGroup({
    type: new FormControl(''),
    number: new FormControl(''),
    indicative: new FormControl(''),
  });

  employeeFomr = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    docType: new FormControl('', Validators.required),
    docNumber: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    date: new FormControl('', Validators.required),
  });

  telefonos: any[] = [];
  constructor(private _employeeService: EmployeesService) {}

  ngOnInit(): void {}

  onSubmit() {
    const {
      name,
      surname,
      docType,
      docNumber,
      salary,
      email,
      date,
    } = this.employeeFomr.value;
    
    if (Object.entries(this.telefonos).length == 0) {
      alert('Debe registrar por lo menos un télefono!');
    } else {
      const newEmployee = {
        nombres: name,
        apellidos: surname,
        tipoIdentificacion: docType,
        numeroIdentificacion: docNumber,
        correoElectronico: email,
        fechaIngreso: date,
        salarioMensual: salary,
      };

      this._employeeService.createEmployee(newEmployee).subscribe((id) => {
        this.telefonos.forEach((tel) => {
          const newTel = {
            tipo: tel.type,
            numero: tel.number,
            indicativo: tel.indicative,
            personaId: id['id'],
          };
          this._employeeService.createTel(newTel).subscribe((success) => {
            console.log(success);
          });
        });
        this.telephoneForm.reset();
        this.employeeFomr.reset();
        alert("Empleado creado con éxito!")
      });
    }
  }

  onSubmitFirst() {
    this.telefonos.push(this.telephoneForm.value);
    console.log(this.telefonos);
    this.telephoneForm.reset();
  }
}
