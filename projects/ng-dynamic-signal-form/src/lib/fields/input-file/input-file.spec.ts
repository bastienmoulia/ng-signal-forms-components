import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfInputFile } from './input-file';

describe('NgdsfInputFile', () => {
  let component: NgdsfInputFile;
  let fixture: ComponentFixture<NgdsfInputFile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfInputFile],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputFile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
