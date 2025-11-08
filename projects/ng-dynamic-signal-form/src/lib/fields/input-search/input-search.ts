import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../layout/field-template';

export interface NgdsfInputSearchParams extends NgdsfFieldParams {
  minlength?: number;
  maxlength?: number;
  pattern?: string;
  autocomplete?: string;
  size?: number;
}

@Component({
  selector: 'ngdsf-input-search',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './input-search.html',
})
export class NgdsfInputSearch {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgdsfInputSearchParams>({});
}
