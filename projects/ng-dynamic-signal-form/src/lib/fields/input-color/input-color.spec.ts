import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfInputColor } from './input-color';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgdsfInputColor', () => {
  let component: NgdsfInputColor;
  let fixture: ComponentFixture<NgdsfInputColor>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgdsfInputColor, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgdsfInputColor],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputColor);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
