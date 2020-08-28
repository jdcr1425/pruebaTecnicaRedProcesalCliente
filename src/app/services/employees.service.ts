import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  baseUrl: string = 'http://localhost:3000/API/V1/';

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(this.baseUrl + 'employees');
  }

  getEmployee(id) {
    return this.http.get(this.baseUrl + 'employees/' + id);
  }

  createEmployee(employee) {
    return this.http.post(`${this.baseUrl}employees`, employee);
  }

  updateEmployee(id, employee) {
    return this.http.put(`${this.baseUrl}employees/${id}`, employee);
  }

  getTelephones(id) {
    return this.http.get(`${this.baseUrl}telephones/${id}`);
  }

  createTel(newTel) {
    return this.http.post(`${this.baseUrl}telephones`, newTel);
  }
}
