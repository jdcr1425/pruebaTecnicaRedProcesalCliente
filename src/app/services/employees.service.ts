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

  getTelephones(id) {
    return this.http.get(`${this.baseUrl}/telephones/${id}`);
  }

}
