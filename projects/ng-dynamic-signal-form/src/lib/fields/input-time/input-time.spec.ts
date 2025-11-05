import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfInputTime } from './input-time';

describe('NgdsfInputTime', () => {
  let component: NgdsfInputTime;
  let fixture: ComponentFixture<NgdsfInputTime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfInputTime],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputTime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
