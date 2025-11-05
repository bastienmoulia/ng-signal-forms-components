import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfTextarea } from './textarea';

describe('NgdsfTextarea', () => {
  let component: NgdsfTextarea;
  let fixture: ComponentFixture<NgdsfTextarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfTextarea],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfTextarea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
