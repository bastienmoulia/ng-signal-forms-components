import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfInputSearch } from './input-search';

describe('NgdsfInputSearch', () => {
  let component: NgdsfInputSearch;
  let fixture: ComponentFixture<NgdsfInputSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfInputSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
