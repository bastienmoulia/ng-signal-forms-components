import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfInputText } from './input-text';

function mockField() {
  // Provide minimal shape used by template without invoking Angular control directive
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    // minimal state shape to satisfy potential access
    state: { value: () => '' },
  });
}

describe('NgdsfInputText', () => {
  let component: NgdsfInputText;
  let fixture: ComponentFixture<NgdsfInputText>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgdsfInputText, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgdsfInputText],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputText);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
