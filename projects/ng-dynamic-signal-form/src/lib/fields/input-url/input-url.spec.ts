import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfInputUrl } from './input-url';

describe('NgdsfInputUrl', () => {
  let component: NgdsfInputUrl;
  let fixture: ComponentFixture<NgdsfInputUrl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfInputUrl],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfInputUrl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
