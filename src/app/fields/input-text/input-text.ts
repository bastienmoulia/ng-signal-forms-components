import { Component, input } from '@angular/core';
import { Field } from '@angular/forms/signals';
import { FieldParams, FieldTemplate } from '../../field-template/field-template';

interface InputTextParams extends FieldParams {
  // Additional properties specific to the text input can be added here
}

@Component({
  selector: 'app-input-text',
  imports: [Field, FieldTemplate],
  templateUrl: './input-text.html',
})
export class InputText {
  field = input.required<any>();
  params = input<InputTextParams>({});
}
