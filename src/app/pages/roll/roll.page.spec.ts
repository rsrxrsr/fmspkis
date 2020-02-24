import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollPage } from './roll.page';

describe('RollPage', () => {
  let component: RollPage;
  let fixture: ComponentFixture<RollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
