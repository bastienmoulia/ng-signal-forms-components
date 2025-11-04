import { Component, input } from '@angular/core';
import { Field } from '@angular/forms/signals';
import { FieldParams, FieldTemplate } from '../../field-template/field-template';

interface InputEmailParams extends FieldParams {
  // Additional properties specific to the email input can be added here
}

@Component({
  selector: 'app-input-email',
  imports: [Field, FieldTemplate],
  templateUrl: './input-email.html',
})
export class InputEmail {
  field = input.required<any>();
  params = input<InputEmailParams>({});
}
