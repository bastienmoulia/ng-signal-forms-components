import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfInputCheckbox } from './input-checkbox';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => false },
  });
}

describe('NgdsfInputCheckbox', () => {
  let component: NgdsfInputCheckbox;
  let fixture: ComponentFixture<NgdsfInputCheckbox>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgdsfInputCheckbox, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgdsfInputCheckbox],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputCheckbox);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
