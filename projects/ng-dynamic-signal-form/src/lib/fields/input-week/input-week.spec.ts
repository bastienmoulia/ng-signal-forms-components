import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfInputWeek } from './input-week';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgdsfInputWeek', () => {
  let component: NgdsfInputWeek;
  let fixture: ComponentFixture<NgdsfInputWeek>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgdsfInputWeek, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgdsfInputWeek],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputWeek);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
