import { Component, input } from '@angular/core';
import { FieldParams, FieldTemplate } from '../../field-template/field-template';
import { Field } from '@angular/forms/signals';

interface InputPasswordParams extends FieldParams {
  // Additional properties specific to the password input can be added here
}

@Component({
  selector: 'app-input-password',
  imports: [Field, FieldTemplate],
  templateUrl: './input-password.html',
})
export class InputPassword {
  field = input.required<any>();
  params = input<InputPasswordParams>({});
}
