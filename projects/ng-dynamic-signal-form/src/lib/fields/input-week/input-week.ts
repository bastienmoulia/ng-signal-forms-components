import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../field-template/field-template';

export interface NgdsfInputWeekParams extends NgdsfFieldParams {
  min?: string;
  max?: string;
  step?: number;
}

@Component({
  selector: 'ngdsf-input-week',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './input-week.html',
})
export class NgdsfInputWeek {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgdsfInputWeekParams>({});
}
