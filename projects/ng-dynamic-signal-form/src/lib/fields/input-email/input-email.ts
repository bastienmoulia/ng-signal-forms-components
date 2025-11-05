import { Component, input } from '@angular/core';
import { Field } from '@angular/forms/signals';
import { NgdsfFieldParams, NgdsfFieldTemplate } from '../../field-template/field-template';

interface NgdsfInputEmailParams extends NgdsfFieldParams {
  // Additional properties specific to the email input can be added here
}

@Component({
  selector: 'ngdsf-input-email',
  imports: [Field, NgdsfFieldTemplate],
  templateUrl: './input-email.html',
})
export class NgdsfInputEmail {
  field = input.required<any>();
  params = input<NgdsfInputEmailParams>({});
}
