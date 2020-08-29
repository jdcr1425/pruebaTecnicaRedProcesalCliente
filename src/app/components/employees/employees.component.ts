import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: any = [];
  newEmployees=[];

  constructor(private _employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this._employeesService.getEmployees().subscribe((employees) => {
      if (employees['state'] == 'ok') {
        this.employees = employees['data']['employees'];
        this.getTel();
      }
    });
  }

  getTel() {
    let newObject = {};
    
    this.employees.forEach((employee) => {
      this._employeesService.getTelephones(employee['id']).subscribe((tels) => {
        newObject = {
          empleado: employee,
          telefonos: tels['data']['phones'],
        };
        this.newEmployees.push(newObject);
      });
    });    
  }
}
