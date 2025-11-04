import { Component, input } from '@angular/core';
import { Field } from '@angular/forms/signals';
import { FieldParams, FieldTemplate } from '../../field-template/field-template';

interface TextareaParams extends FieldParams {
  rows?: number;
  cols?: number;
  // Additional properties specific to the textarea can be added here
}

@Component({
  selector: 'app-textarea',
  imports: [Field, FieldTemplate],
  templateUrl: './textarea.html',
})
export class Textarea {
  field = input.required<any>();
  params = input<TextareaParams>({});
}
