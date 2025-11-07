import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfFields, NgdsfFieldType } from './fields';

function mockForm() {
  // form() returns inner, double call pattern simulated in template by passing just a map accessor.
  const structure = {
    childrenMap: () =>
      new Map<string, any>([
        ['email', mockField()],
        ['password', mockField()],
      ]),
  };
  return () => ({ structure });
}

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
  });
}

describe('NgdsfFields', () => {
  let component: NgdsfFields;
  let fixture: ComponentFixture<NgdsfFields>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfFields],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfFields);
    fixture.componentRef.setInput('form', mockForm());
    fixture.componentRef.setInput('params', {
      email: { type: NgdsfFieldType.InputEmail, label: 'Email' },
      password: { type: NgdsfFieldType.InputPassword, label: 'Password' },
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
