import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfInputDate } from './input-date';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgdsfInputDate', () => {
  let component: NgdsfInputDate;
  let fixture: ComponentFixture<NgdsfInputDate>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgdsfInputDate, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgdsfInputDate],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputDate);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
