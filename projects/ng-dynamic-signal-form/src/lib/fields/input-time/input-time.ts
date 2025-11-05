import { Component, input } from '@angular/core';
import { Field } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../field-template/field-template';

interface NgdsfInputTimeParams extends NgdsfFieldParams {
  // Additional properties specific to the time input can be added here
}

@Component({
  selector: 'ngdsf-input-time',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './input-time.html',
})
export class NgdsfInputTime {
  field = input.required<any>();
  params = input<NgdsfInputTimeParams>({});
}
