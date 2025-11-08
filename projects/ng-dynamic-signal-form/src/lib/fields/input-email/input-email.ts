import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../layout/field-template';

export interface NgdsfInputEmailParams extends NgdsfFieldParams {
  minlength?: number;
  maxlength?: number;
  pattern?: string;
  autocomplete?: string;
  size?: number;
  multiple?: boolean;
}

@Component({
  selector: 'ngdsf-input-email',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './input-email.html',
})
export class NgdsfInputEmail {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgdsfInputEmailParams>({});
}
