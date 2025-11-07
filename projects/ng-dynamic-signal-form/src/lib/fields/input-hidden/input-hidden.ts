import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../field-template/field-template';

export interface NgdsfInputHiddenParams extends NgdsfFieldParams {}

@Component({
  selector: 'ngdsf-input-hidden',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './input-hidden.html',
})
export class NgdsfInputHidden {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgdsfInputHiddenParams>({});
}
