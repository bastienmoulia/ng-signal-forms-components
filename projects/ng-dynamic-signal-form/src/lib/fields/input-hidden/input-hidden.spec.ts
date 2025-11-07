import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfInputHidden } from './input-hidden';

describe('NgdsfInputHidden', () => {
  let component: NgdsfInputHidden;
  let fixture: ComponentFixture<NgdsfInputHidden>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfInputHidden],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputHidden);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
