import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../field-template/field-template';

export interface NgdsfSelectOption {
  type?: 'option';
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface NgdsfSelectOptgroup {
  type: 'optgroup';
  label: string;
  disabled?: boolean;
  options: NgdsfSelectOption[];
}

export interface NgdsfSelectHr {
  type: 'hr';
}

export type NgdsfSelectItem = NgdsfSelectOption | NgdsfSelectOptgroup | NgdsfSelectHr;

export interface NgdsfSelectParams extends NgdsfFieldParams {
  options?: NgdsfSelectItem[];
  multiple?: boolean;
  size?: number;
}

@Component({
  selector: 'ngdsf-select',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './select.html',
})
export class NgdsfSelect {
  field = input.required<() => FieldState<any, string | number>>();
  params = input<NgdsfSelectParams>({});
}
