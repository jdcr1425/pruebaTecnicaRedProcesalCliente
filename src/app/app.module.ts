import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/shared/employee/employee.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesService } from './services/employees.service';

import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { BusquedaEmployeesComponent } from './components/busqueda-employees/busqueda-employees.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    EmployeeComponent,
    EmployeesComponent,
    BusquedaEmployeesComponent,
    CreateEmployeeComponent,
    EmployeeUpdateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [EmployeesService, { provide: LOCALE_ID, useValue: 'es-*' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
