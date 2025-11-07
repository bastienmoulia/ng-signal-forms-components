import { Component, input } from '@angular/core';
import { FieldState } from '@angular/forms/signals';

export interface NgdsfFieldErrorsParams {
  showWhen?: 'touched' | 'dirty' | 'always';
  className?: string;
}

@Component({
  selector: 'ngdsf-field-errors',
  template: `
    @if (shouldShowErrors()) {
      <ul [class]="params().className || 'field-errors'">
        @for (error of field()().errors(); track $index) {
          <li class="field-error">{{ error.message }}</li>
        }
      </ul>
    }
  `,
  styles: [`
    .field-errors {
      list-style: none;
      padding: 0;
      margin: 0.25rem 0 0 0;
      color: #d32f2f;
      font-size: 0.875rem;
    }
    .field-error {
      margin: 0.125rem 0;
    }
  `],
})
export class NgdsfFieldErrors {
  field = input.required<() => FieldState<any, any>>();
  params = input<NgdsfFieldErrorsParams>({});

  shouldShowErrors() {
    const fieldAccessor = this.field();
    if (!fieldAccessor) {
      return false;
    }
    
    const fieldState = fieldAccessor();
    if (!fieldState || !fieldState.invalid || !fieldState.invalid()) {
      return false;
    }

    const showWhen = this.params().showWhen || 'touched';
    
    switch (showWhen) {
      case 'always':
        return true;
      case 'dirty':
        return fieldState.dirty && fieldState.dirty();
      case 'touched':
      default:
        return fieldState.touched && fieldState.touched();
    }
  }
}
