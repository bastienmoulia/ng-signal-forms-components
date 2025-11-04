import { Component, input } from '@angular/core';
import { Field } from '@angular/forms/signals';
import { FieldParams, FieldTemplate } from '../../field-template/field-template';

interface InputDateParams extends FieldParams {
  // Additional properties specific to the date input can be added here
}

@Component({
  selector: 'app-input-date',
  imports: [Field, FieldTemplate],
  templateUrl: './input-date.html',
})
export class InputDate {
  field = input.required<any>();
  params = input<InputDateParams>({});
}
