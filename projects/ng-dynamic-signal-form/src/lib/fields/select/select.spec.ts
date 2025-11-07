import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfSelect } from './select';

function mockField() {
  return () => ({
    required: false,
    touched: () => false,
    invalid: () => false,
    errors: () => [],
    state: { value: () => '' },
  });
}

describe('NgdsfSelect', () => {
  let component: NgdsfSelect;
  let fixture: ComponentFixture<NgdsfSelect>;

  beforeEach(async () => {
    TestBed.overrideTemplate(NgdsfSelect, '<div></div>');
    await TestBed.configureTestingModule({
      imports: [NgdsfSelect],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfSelect);
    fixture.componentRef.setInput('field', mockField());
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept options with type property', () => {
    fixture.componentRef.setInput('params', {
      options: [
        { type: 'option', value: '1', label: 'Option 1' },
        { type: 'option', value: '2', label: 'Option 2' },
      ],
    });
    fixture.detectChanges();
    expect(component.params().options).toBeTruthy();
    expect(component.params().options?.length).toBe(2);
  });

  it('should accept optgroup with nested options', () => {
    fixture.componentRef.setInput('params', {
      options: [
        {
          type: 'optgroup',
          label: 'Group 1',
          options: [
            { type: 'option', value: '1', label: 'Option 1' },
            { type: 'option', value: '2', label: 'Option 2' },
          ],
        },
      ],
    });
    fixture.detectChanges();
    expect(component.params().options).toBeTruthy();
    expect(component.params().options?.[0]).toHaveProperty('type', 'optgroup');
  });

  it('should accept hr separator', () => {
    fixture.componentRef.setInput('params', {
      options: [
        { type: 'option', value: '1', label: 'Option 1' },
        { type: 'hr' },
        { type: 'option', value: '2', label: 'Option 2' },
      ],
    });
    fixture.detectChanges();
    expect(component.params().options).toBeTruthy();
    expect(component.params().options?.[1]).toHaveProperty('type', 'hr');
  });

  it('should accept mixed items (options, optgroups, and hr)', () => {
    fixture.componentRef.setInput('params', {
      options: [
        { type: 'option', value: '1', label: 'Option 1' },
        { type: 'hr' },
        {
          type: 'optgroup',
          label: 'Group 1',
          options: [
            { type: 'option', value: '2', label: 'Option 2' },
            { type: 'option', value: '3', label: 'Option 3' },
          ],
        },
        { type: 'hr' },
        { type: 'option', value: '4', label: 'Option 4' },
      ],
    });
    fixture.detectChanges();
    expect(component.params().options).toBeTruthy();
    expect(component.params().options?.length).toBe(5);
  });

  it('should support backward compatibility with options without type property', () => {
    fixture.componentRef.setInput('params', {
      options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2', disabled: true },
        { value: '3', label: 'Option 3' },
      ],
    });
    fixture.detectChanges();
    expect(component.params().options).toBeTruthy();
    expect(component.params().options?.length).toBe(3);
  });
});
