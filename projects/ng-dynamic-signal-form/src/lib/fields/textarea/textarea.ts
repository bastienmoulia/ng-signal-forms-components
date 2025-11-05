import { Component, input } from '@angular/core';
import { Field } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../field-template/field-template';

interface NgdsfTextareaParams extends NgdsfFieldParams {
  rows?: number;
  cols?: number;
  // Additional properties specific to the textarea can be added here
}

@Component({
  selector: 'ngdsf-textarea',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './textarea.html',
})
export class NgdsfTextarea {
  field = input.required<any>();
  params = input<NgdsfTextareaParams>({});
}
