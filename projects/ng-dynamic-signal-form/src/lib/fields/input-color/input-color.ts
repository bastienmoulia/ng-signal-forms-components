import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../field-template/field-template';

export interface NgdsfInputColorParams extends NgdsfFieldParams {}

@Component({
  selector: 'ngdsf-input-color',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './input-color.html',
})
export class NgdsfInputColor {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgdsfInputColorParams>({});
}
