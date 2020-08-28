import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaEmployeesComponent } from './busqueda-employees.component';

describe('BusquedaEmployeesComponent', () => {
  let component: BusquedaEmployeesComponent;
  let fixture: ComponentFixture<BusquedaEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
