import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfInputMonth } from './input-month';

describe('NgdsfInputMonth', () => {
  let component: NgdsfInputMonth;
  let fixture: ComponentFixture<NgdsfInputMonth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfInputMonth],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputMonth);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
