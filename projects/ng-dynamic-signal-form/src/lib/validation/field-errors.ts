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
    <ul [class]="params().className">
      @for (error of field()().errors(); track $index) {
      <li>{{ error.message }}</li>
      }
    </ul>
    }
  `,
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
