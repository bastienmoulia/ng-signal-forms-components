import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfInputHidden } from './input-hidden';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgdsfInputHidden', () => {
  let component: NgdsfInputHidden;
  let fixture: ComponentFixture<NgdsfInputHidden>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgdsfInputHidden, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgdsfInputHidden],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputHidden);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
