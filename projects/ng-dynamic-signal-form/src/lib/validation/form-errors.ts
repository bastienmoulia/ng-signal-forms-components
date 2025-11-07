import { Component, computed, input } from '@angular/core';

export interface NgdsfFormErrorsParams {
  title?: string;
  className?: string;
}

@Component({
  selector: 'ngdsf-form-errors',
  template: `
    @if (hasErrors()) {
      <div [class]="params().className || 'form-errors'">
        @if (params().title) {
          <h4 class="form-errors-title">{{ params().title }}</h4>
        }
        <ul class="form-errors-list">
          @for (error of allErrors(); track $index) {
            <li class="form-error">{{ error.field }}: {{ error.message }}</li>
          }
        </ul>
      </div>
    }
  `,
  styles: [`
    .form-errors {
      background-color: #ffebee;
      border: 1px solid #ef5350;
      border-radius: 4px;
      padding: 1rem;
      margin: 1rem 0;
    }
    .form-errors-title {
      margin: 0 0 0.5rem 0;
      color: #c62828;
      font-size: 1rem;
      font-weight: 600;
    }
    .form-errors-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .form-error {
      color: #d32f2f;
      font-size: 0.875rem;
      margin: 0.25rem 0;
    }
  `],
})
export class NgdsfFormErrors {
  form = input.required<any>();
  params = input<NgdsfFormErrorsParams>({});

  allErrors = computed(() => {
    const formAccessor = this.form();
    const errors: Array<{ field: string; message: string }> = [];
    
    if (formAccessor && formAccessor().structure && formAccessor().structure.childrenMap) {
      const childrenMap = formAccessor().structure.childrenMap();
      
      for (const [fieldName] of childrenMap) {
        const fieldAccessor = formAccessor[fieldName];
        if (fieldAccessor) {
          const state = fieldAccessor();
          if (state && state.invalid && state.invalid() && state.touched && state.touched()) {
            const fieldErrors = state.errors ? state.errors() : [];
            for (const error of fieldErrors) {
              errors.push({
                field: fieldName,
                message: error.message || 'Invalid field',
              });
            }
          }
        }
      }
    }
    
    return errors;
  });

  hasErrors = computed(() => this.allErrors().length > 0);
}
