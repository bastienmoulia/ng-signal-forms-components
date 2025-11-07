import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfInputTel } from './input-tel';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgdsfInputTel', () => {
  let component: NgdsfInputTel;
  let fixture: ComponentFixture<NgdsfInputTel>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgdsfInputTel, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgdsfInputTel],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputTel);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
