import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfInputCheckbox } from './input-checkbox';

describe('NgdsfInputCheckbox', () => {
  let component: NgdsfInputCheckbox;
  let fixture: ComponentFixture<NgdsfInputCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfInputCheckbox],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputCheckbox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
