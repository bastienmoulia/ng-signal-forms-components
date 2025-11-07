import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../field-template/field-template';

export interface NgdsfInputFileParams extends NgdsfFieldParams {
  accept?: string;
  multiple?: boolean;
}

@Component({
  selector: 'ngdsf-input-file',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './input-file.html',
})
export class NgdsfInputFile {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgdsfInputFileParams>({});
}
