import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfInputDatetimeLocal } from './input-datetime-local';

describe('NgdsfInputDatetimeLocal', () => {
  let component: NgdsfInputDatetimeLocal;
  let fixture: ComponentFixture<NgdsfInputDatetimeLocal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfInputDatetimeLocal],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputDatetimeLocal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
