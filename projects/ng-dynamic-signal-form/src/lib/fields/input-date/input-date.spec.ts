import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfInputDate } from './input-date';

describe('NgdsfInputDate', () => {
  let component: NgdsfInputDate;
  let fixture: ComponentFixture<NgdsfInputDate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfInputDate],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputDate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
