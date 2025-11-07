import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfSelect } from './select';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgdsfSelect', () => {
  let component: NgdsfSelect;
  let fixture: ComponentFixture<NgdsfSelect>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgdsfSelect, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgdsfSelect],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfSelect);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
