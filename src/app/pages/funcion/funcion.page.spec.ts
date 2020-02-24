import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionPage } from './funcion.page';

describe('FuncionPage', () => {
  let component: FuncionPage;
  let fixture: ComponentFixture<FuncionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
