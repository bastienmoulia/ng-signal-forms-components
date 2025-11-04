import { Component, input } from '@angular/core';
import { Field } from '@angular/forms/signals';
import { FieldParams, FieldTemplate } from '../../field-template/field-template';

interface InputTimeParams extends FieldParams {
  // Additional properties specific to the time input can be added here
}

@Component({
  selector: 'app-input-time',
  imports: [Field, FieldTemplate],
  templateUrl: './input-time.html',
})
export class InputTime {
  field = input.required<any>();
  params = input<InputTimeParams>({});
}
