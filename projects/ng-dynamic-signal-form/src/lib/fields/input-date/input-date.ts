import { Component, input } from '@angular/core';
import { Field } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../field-template/field-template';

interface NgdsfInputDateParams extends NgdsfFieldParams {
  // Additional properties specific to the date input can be added here
}

@Component({
  selector: 'ngdsf-input-date',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './input-date.html',
})
export class NgdsfInputDate {
  field = input.required<any>();
  params = input<NgdsfInputDateParams>({});
}
