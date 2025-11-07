import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfInputDatetimeLocal } from './input-datetime-local';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgdsfInputDatetimeLocal', () => {
  let component: NgdsfInputDatetimeLocal;
  let fixture: ComponentFixture<NgdsfInputDatetimeLocal>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgdsfInputDatetimeLocal, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgdsfInputDatetimeLocal],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputDatetimeLocal);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
