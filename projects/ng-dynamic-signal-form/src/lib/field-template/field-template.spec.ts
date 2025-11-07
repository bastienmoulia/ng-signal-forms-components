import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfFieldTemplate } from './field-template';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
  });
}

describe('NgdsfFieldTemplate', () => {
  let component: NgdsfFieldTemplate;
  let fixture: ComponentFixture<NgdsfFieldTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfFieldTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfFieldTemplate);
    fixture.componentRef.setInput('field', mockField());
    fixture.componentRef.setInput('params', {});
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept className parameter', () => {
    const params = { className: 'custom-class' };
    fixture.componentRef.setInput('params', params);
    fixture.detectChanges();
    expect(component.params().className).toBe('custom-class');
  });
});
