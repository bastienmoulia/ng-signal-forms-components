import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../field-template/field-template';

export interface NgdsfInputMonthParams extends NgdsfFieldParams {
  min?: string;
  max?: string;
  step?: number;
}

@Component({
  selector: 'ngdsf-input-month',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './input-month.html',
})
export class NgdsfInputMonth {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgdsfInputMonthParams>({});
}
