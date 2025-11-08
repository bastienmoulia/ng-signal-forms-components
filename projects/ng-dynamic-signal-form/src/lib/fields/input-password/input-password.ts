import { Component, input } from '@angular/core';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../layout/field-template';
import { Field, FieldState } from '@angular/forms/signals';

export interface NgdsfInputPasswordParams extends NgdsfFieldParams {
  minlength?: number;
  maxlength?: number;
  pattern?: string;
  autocomplete?: string;
  size?: number;
}

@Component({
  selector: 'ngdsf-input-password',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './input-password.html',
})
export class NgdsfInputPassword {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgdsfInputPasswordParams>({});
}
