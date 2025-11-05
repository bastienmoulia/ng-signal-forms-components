import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfFields } from './fields';

describe('NgdsfFields', () => {
  let component: NgdsfFields;
  let fixture: ComponentFixture<NgdsfFields>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfFields]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgdsfFields);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
