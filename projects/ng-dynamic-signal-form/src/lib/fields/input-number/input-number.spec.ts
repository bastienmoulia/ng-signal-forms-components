import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfInputNumber } from './input-number';

describe('NgdsfInputNumber', () => {
  let component: NgdsfInputNumber;
  let fixture: ComponentFixture<NgdsfInputNumber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfInputNumber],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputNumber);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
