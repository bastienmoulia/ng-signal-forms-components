import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../field-template/field-template';

export interface NgdsfInputCheckboxParams extends NgdsfFieldParams {
  value?: string;
}

@Component({
  selector: 'ngdsf-input-checkbox',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './input-checkbox.html',
})
export class NgdsfInputCheckbox {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgdsfInputCheckboxParams>({});
}
