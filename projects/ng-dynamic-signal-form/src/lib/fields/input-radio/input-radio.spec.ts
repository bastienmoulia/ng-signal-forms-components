import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfInputRadio } from './input-radio';

describe('NgdsfInputRadio', () => {
  let component: NgdsfInputRadio;
  let fixture: ComponentFixture<NgdsfInputRadio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfInputRadio],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputRadio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
