import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfSelect } from './select';

describe('NgdsfSelect', () => {
  let component: NgdsfSelect;
  let fixture: ComponentFixture<NgdsfSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfSelect],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfSelect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
