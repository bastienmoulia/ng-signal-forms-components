import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfInputRange } from './input-range';

describe('NgdsfInputRange', () => {
  let component: NgdsfInputRange;
  let fixture: ComponentFixture<NgdsfInputRange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfInputRange],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputRange);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
