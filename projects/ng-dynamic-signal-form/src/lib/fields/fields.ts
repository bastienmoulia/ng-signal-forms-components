import { Component, computed, input } from '@angular/core';
import { NgdsfFieldParams } from '../field-template/field-template';
import { NgdsfInputText } from './input-text/input-text';
import { NgdsfInputEmail } from './input-email/input-email';
import { NgdsfInputDate } from './input-date/input-date';
import { NgdsfInputPassword } from './input-password/input-password';
import { NgdsfInputTime } from './input-time/input-time';
import { NgdsfTextarea } from './textarea/textarea';
import { NgdsfSelect } from './select/select';

export enum NgdsfFieldType {
  InputDate = 'input-date',
  InputEmail = 'input-email',
  InputPassword = 'input-password',
  InputTime = 'input-time',
  InputText = 'input-text',
  Select = 'select',
  Textarea = 'textarea',
  // Additional field types can be added here
}

export interface NgdsfFieldParamsTyped extends NgdsfFieldParams {
  type: NgdsfFieldType;
}

export interface NgdsfFormParams {
  [key: string]: NgdsfFieldParamsTyped;
}

@Component({
  selector: 'ngdsf-fields',
  imports: [
    NgdsfInputText,
    NgdsfInputEmail,
    NgdsfInputDate,
    NgdsfInputPassword,
    NgdsfInputTime,
    NgdsfSelect,
    NgdsfTextarea,
  ],
  templateUrl: './fields.html',
})
export class NgdsfFields {
  params = input.required<{ [key: string]: NgdsfFieldParamsTyped }>();
  form = input.required<any>();

  fieldsKeys = computed(() => {
    return Array.from((this.form()().structure.childrenMap() as Map<string, any>).keys());
  });
}
