import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTime } from './input-time';

describe('InputTime', () => {
  let component: InputTime;
  let fixture: ComponentFixture<InputTime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTime],
    }).compileComponents();

    fixture = TestBed.createComponent(InputTime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
