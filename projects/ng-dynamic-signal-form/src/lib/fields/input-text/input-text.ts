import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../layout/field-template';

export interface NgdsfInputTextParams extends NgdsfFieldParams {
  minlength?: number;
  maxlength?: number;
  pattern?: string;
  autocomplete?: string;
  size?: number;
}

@Component({
  selector: 'ngdsf-input-text',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './input-text.html',
})
export class NgdsfInputText {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgdsfInputTextParams>({});
}
