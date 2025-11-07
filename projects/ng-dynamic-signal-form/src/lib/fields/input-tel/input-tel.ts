import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../field-template/field-template';

export interface NgdsfInputTelParams extends NgdsfFieldParams {
  minlength?: number;
  maxlength?: number;
  pattern?: string;
  autocomplete?: string;
  size?: number;
}

@Component({
  selector: 'ngdsf-input-tel',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './input-tel.html',
})
export class NgdsfInputTel {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgdsfInputTelParams>({});
}
