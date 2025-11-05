import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfInputPassword } from './input-password';

describe('NgdsfInputPassword', () => {
  let component: NgdsfInputPassword;
  let fixture: ComponentFixture<NgdsfInputPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfInputPassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgdsfInputPassword);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
