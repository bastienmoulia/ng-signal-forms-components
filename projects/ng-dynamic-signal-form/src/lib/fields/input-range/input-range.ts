import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../field-template/field-template';

export interface NgdsfInputRangeParams extends NgdsfFieldParams {
  min?: number;
  max?: number;
  step?: number;
}

@Component({
  selector: 'ngdsf-input-range',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './input-range.html',
})
export class NgdsfInputRange {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgdsfInputRangeParams>({});
}
