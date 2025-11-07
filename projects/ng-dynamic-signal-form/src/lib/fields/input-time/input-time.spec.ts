import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfInputTime } from './input-time';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgdsfInputTime', () => {
  let component: NgdsfInputTime;
  let fixture: ComponentFixture<NgdsfInputTime>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgdsfInputTime, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgdsfInputTime],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputTime);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
