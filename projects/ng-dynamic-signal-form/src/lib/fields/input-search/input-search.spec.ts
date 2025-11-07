import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfInputSearch } from './input-search';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgdsfInputSearch', () => {
  let component: NgdsfInputSearch;
  let fixture: ComponentFixture<NgdsfInputSearch>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgdsfInputSearch, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgdsfInputSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputSearch);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
