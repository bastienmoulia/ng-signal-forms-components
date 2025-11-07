import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfInputMonth } from './input-month';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgdsfInputMonth', () => {
  let component: NgdsfInputMonth;
  let fixture: ComponentFixture<NgdsfInputMonth>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgdsfInputMonth, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgdsfInputMonth],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputMonth);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
