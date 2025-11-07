import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfInputEmail } from './input-email';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgdsfInputEmail', () => {
  let component: NgdsfInputEmail;
  let fixture: ComponentFixture<NgdsfInputEmail>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgdsfInputEmail, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgdsfInputEmail],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputEmail);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
