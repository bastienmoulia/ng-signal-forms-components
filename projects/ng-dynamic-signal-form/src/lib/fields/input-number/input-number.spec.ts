import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfInputNumber } from './input-number';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => 0 },
  });
}

describe('NgdsfInputNumber', () => {
  let component: NgdsfInputNumber;
  let fixture: ComponentFixture<NgdsfInputNumber>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgdsfInputNumber, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgdsfInputNumber],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputNumber);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
