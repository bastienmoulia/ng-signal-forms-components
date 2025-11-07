import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../field-template/field-template';

export interface NgdsfInputUrlParams extends NgdsfFieldParams {
  minlength?: number;
  maxlength?: number;
  pattern?: string;
  autocomplete?: string;
  size?: number;
}

@Component({
  selector: 'ngdsf-input-url',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './input-url.html',
})
export class NgdsfInputUrl {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgdsfInputUrlParams>({});
}
