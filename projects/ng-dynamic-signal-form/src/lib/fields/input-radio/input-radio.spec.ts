import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfInputRadio } from './input-radio';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgdsfInputRadio', () => {
  let component: NgdsfInputRadio;
  let fixture: ComponentFixture<NgdsfInputRadio>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgdsfInputRadio, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgdsfInputRadio],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputRadio);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
