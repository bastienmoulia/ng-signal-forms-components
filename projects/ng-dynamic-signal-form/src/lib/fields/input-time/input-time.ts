import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../layout/field-template';

export interface NgdsfInputTimeParams extends NgdsfFieldParams {
  min?: string;
  max?: string;
  step?: number;
}

@Component({
  selector: 'ngdsf-input-time',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './input-time.html',
})
export class NgdsfInputTime {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgdsfInputTimeParams>({});
}
