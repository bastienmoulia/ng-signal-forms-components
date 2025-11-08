import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../layout/field-template';

export interface NgdsfTextareaParams extends NgdsfFieldParams {
  rows?: number;
  cols?: number;
  minlength?: number;
  maxlength?: number;
  wrap?: 'soft' | 'hard' | 'off';
}

@Component({
  selector: 'ngdsf-textarea',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './textarea.html',
})
export class NgdsfTextarea {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgdsfTextareaParams>({});
}
