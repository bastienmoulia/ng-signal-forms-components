import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfTextarea } from './textarea';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgdsfTextarea', () => {
  let component: NgdsfTextarea;
  let fixture: ComponentFixture<NgdsfTextarea>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgdsfTextarea, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgdsfTextarea],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfTextarea);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
