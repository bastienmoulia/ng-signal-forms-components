import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfInputRange } from './input-range';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => 0 },
  });
}

describe('NgdsfInputRange', () => {
  let component: NgdsfInputRange;
  let fixture: ComponentFixture<NgdsfInputRange>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgdsfInputRange, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgdsfInputRange],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputRange);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
