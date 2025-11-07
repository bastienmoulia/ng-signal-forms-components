import { Component, computed, input } from '@angular/core';
import { NgdsfFieldParams } from '../field-template/field-template';
import { NgdsfInputText } from './input-text/input-text';
import { NgdsfInputEmail } from './input-email/input-email';
import { NgdsfInputDate } from './input-date/input-date';
import { NgdsfInputPassword } from './input-password/input-password';
import { NgdsfInputTime } from './input-time/input-time';
import { NgdsfInputNumber } from './input-number/input-number';
import { NgdsfInputTel } from './input-tel/input-tel';
import { NgdsfInputUrl } from './input-url/input-url';
import { NgdsfInputSearch } from './input-search/input-search';
import { NgdsfInputColor } from './input-color/input-color';
import { NgdsfInputCheckbox } from './input-checkbox/input-checkbox';
import { NgdsfInputRadio } from './input-radio/input-radio';
import { NgdsfInputRange } from './input-range/input-range';
import { NgdsfInputFile } from './input-file/input-file';
import { NgdsfInputHidden } from './input-hidden/input-hidden';
import { NgdsfInputDatetimeLocal } from './input-datetime-local/input-datetime-local';
import { NgdsfInputMonth } from './input-month/input-month';
import { NgdsfInputWeek } from './input-week/input-week';
import { NgdsfTextarea } from './textarea/textarea';
import { NgdsfSelect } from './select/select';

export enum NgdsfFieldType {
  InputCheckbox = 'input-checkbox',
  InputColor = 'input-color',
  InputDate = 'input-date',
  InputDatetimeLocal = 'input-datetime-local',
  InputEmail = 'input-email',
  InputFile = 'input-file',
  InputHidden = 'input-hidden',
  InputMonth = 'input-month',
  InputNumber = 'input-number',
  InputPassword = 'input-password',
  InputRadio = 'input-radio',
  InputRange = 'input-range',
  InputSearch = 'input-search',
  InputTel = 'input-tel',
  InputText = 'input-text',
  InputTime = 'input-time',
  InputUrl = 'input-url',
  InputWeek = 'input-week',
  Select = 'select',
  Textarea = 'textarea',
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
    NgdsfInputNumber,
    NgdsfInputTel,
    NgdsfInputUrl,
    NgdsfInputSearch,
    NgdsfInputColor,
    NgdsfInputCheckbox,
    NgdsfInputRadio,
    NgdsfInputRange,
    NgdsfInputFile,
    NgdsfInputHidden,
    NgdsfInputDatetimeLocal,
    NgdsfInputMonth,
    NgdsfInputWeek,
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
