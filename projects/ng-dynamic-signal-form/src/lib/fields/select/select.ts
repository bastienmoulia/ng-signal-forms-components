import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../field-template/field-template';

export interface NgdsfSelectOption {
  value: string | number;
  label: string;
}

export interface NgdsfSelectParams extends NgdsfFieldParams {
  options?: NgdsfSelectOption[];
}

@Component({
  selector: 'ngdsf-select',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './select.html',
})
export class NgdsfSelect {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgdsfSelectParams>({});
}
