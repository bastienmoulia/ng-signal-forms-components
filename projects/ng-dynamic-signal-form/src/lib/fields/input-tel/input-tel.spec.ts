import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfInputTel } from './input-tel';

describe('NgdsfInputTel', () => {
  let component: NgdsfInputTel;
  let fixture: ComponentFixture<NgdsfInputTel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfInputTel],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputTel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
