import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfInputEmail } from './input-email';

describe('NgdsfInputEmail', () => {
  let component: NgdsfInputEmail;
  let fixture: ComponentFixture<NgdsfInputEmail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfInputEmail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgdsfInputEmail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
