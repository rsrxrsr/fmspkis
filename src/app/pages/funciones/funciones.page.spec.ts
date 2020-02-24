import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesPage } from './funciones.page';

describe('FuncionesPage', () => {
  let component: FuncionesPage;
  let fixture: ComponentFixture<FuncionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
