import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  navForm = new FormGroup({
    busqueda: new FormControl('')
  });

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  getEmployees(nombre:string) {
    if (nombre.length >0) {
      this._router.navigate(['/search', nombre]);
    }
  }
}
