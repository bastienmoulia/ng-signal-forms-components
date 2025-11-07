import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfInputPassword } from './input-password';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgdsfInputPassword', () => {
  let component: NgdsfInputPassword;
  let fixture: ComponentFixture<NgdsfInputPassword>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgdsfInputPassword, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgdsfInputPassword],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputPassword);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
