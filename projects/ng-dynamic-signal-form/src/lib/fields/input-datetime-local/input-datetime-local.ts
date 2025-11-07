import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../field-template/field-template';

export interface NgdsfInputDatetimeLocalParams extends NgdsfFieldParams {
  min?: string;
  max?: string;
  step?: number;
}

@Component({
  selector: 'ngdsf-input-datetime-local',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './input-datetime-local.html',
})
export class NgdsfInputDatetimeLocal {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgdsfInputDatetimeLocalParams>({});
}
