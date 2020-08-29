import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-busqueda-employees',
  templateUrl: './busqueda-employees.component.html',
  styleUrls: ['./busqueda-employees.component.css'],
})
export class BusquedaEmployeesComponent implements OnInit {
  filteredEmployees = [];
  allEmployees = [];
  nombre = '';
  newEmployees = [];
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _employeeService: EmployeesService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.nombre = params['nombre'];
      this.showEmployees(this.nombre);
    });
  }

  showEmployees(nombre) {
    this.newEmployees = [];
    this.filteredEmployees = [];
    this._employeeService.getEmployees().subscribe((employees) => {
      this.allEmployees = employees['data']['employees'];
      this.allEmployees.forEach((employee) => {
        if (employee.nombres.toLowerCase().includes(nombre.toLowerCase())) {
          this.filteredEmployees.push(employee);
        }
      });
      this.getTel();
    });
  }

  getTel() {
    let newObject = {};

    this.filteredEmployees.forEach((employee) => {
      this._employeeService.getTelephones(employee['id']).subscribe((tels) => {
        newObject = {
          empleado: employee,
          telefonos: tels['data']['phones'],
        };
        this.newEmployees.push(newObject);
      });
    });
  }
}
