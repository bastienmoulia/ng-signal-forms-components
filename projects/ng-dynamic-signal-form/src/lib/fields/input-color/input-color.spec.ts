import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfInputColor } from './input-color';

describe('NgdsfInputColor', () => {
  let component: NgdsfInputColor;
  let fixture: ComponentFixture<NgdsfInputColor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfInputColor],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputColor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
