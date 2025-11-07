import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfInputFile } from './input-file';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => null },
  });
}

describe('NgdsfInputFile', () => {
  let component: NgdsfInputFile;
  let fixture: ComponentFixture<NgdsfInputFile>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgdsfInputFile, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgdsfInputFile],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputFile);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
