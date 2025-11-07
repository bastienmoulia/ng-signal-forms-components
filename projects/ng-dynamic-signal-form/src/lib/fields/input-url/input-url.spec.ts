import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfInputUrl } from './input-url';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgdsfInputUrl', () => {
  let component: NgdsfInputUrl;
  let fixture: ComponentFixture<NgdsfInputUrl>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgdsfInputUrl, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgdsfInputUrl],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputUrl);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
