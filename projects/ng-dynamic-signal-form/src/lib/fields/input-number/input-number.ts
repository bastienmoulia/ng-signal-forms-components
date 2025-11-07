import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../field-template/field-template';

export interface NgdsfInputNumberParams extends NgdsfFieldParams {
  min?: number;
  max?: number;
  step?: number;
  autocomplete?: string;
}

@Component({
  selector: 'ngdsf-input-number',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './input-number.html',
})
export class NgdsfInputNumber {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgdsfInputNumberParams>({});
}
