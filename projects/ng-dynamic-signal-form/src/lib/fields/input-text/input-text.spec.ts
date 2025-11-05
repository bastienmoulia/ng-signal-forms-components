import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfInputText } from './input-text';

describe('NgdsfInputText', () => {
  let component: NgdsfInputText;
  let fixture: ComponentFixture<NgdsfInputText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfInputText],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
