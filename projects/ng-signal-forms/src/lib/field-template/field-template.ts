import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, effect, input, TemplateRef } from '@angular/core';

export interface FieldParams {
  id?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  [key: string]: any;
}

@Component({
  selector: 'lib-field-template',
  imports: [NgTemplateOutlet],
  templateUrl: './field-template.html',
})
export class FieldTemplate {
  field = input.required<any>();
  params = input<FieldParams>({});

  contentTemplate = contentChild(TemplateRef);

  constructor() {
    effect(() => {
      console.log('FieldTemplate params changed:', this.field()());
    });
  }
}
