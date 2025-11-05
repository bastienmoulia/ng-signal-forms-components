import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsfFieldTemplate } from './field-template';

describe('NgdsfFieldTemplate', () => {
  let component: NgdsfFieldTemplate;
  let fixture: ComponentFixture<NgdsfFieldTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfFieldTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgdsfFieldTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
