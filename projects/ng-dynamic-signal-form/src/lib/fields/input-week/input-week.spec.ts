import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfInputWeek } from './input-week';

describe('NgdsfInputWeek', () => {
  let component: NgdsfInputWeek;
  let fixture: ComponentFixture<NgdsfInputWeek>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfInputWeek],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputWeek);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
