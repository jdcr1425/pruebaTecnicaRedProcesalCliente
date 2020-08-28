import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { BusquedaEmployeesComponent } from './components/busqueda-employees/busqueda-employees.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'search/:nombre', component: BusquedaEmployeesComponent },
  { path: 'employee/:id', component: EmployeeUpdateComponent },
  { path: 'employees/add', component: CreateEmployeeComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
