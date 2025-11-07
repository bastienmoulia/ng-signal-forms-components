import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, input, TemplateRef } from '@angular/core';
import { FieldState } from '@angular/forms/signals';

export interface NgdsfFieldParams {
  id?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  className?: string;
  [key: string]: any;
}

@Component({
  selector: 'ngdsf-field-template',
  imports: [NgTemplateOutlet],
  templateUrl: './field-template.html',
})
export class NgdsfFieldTemplate {
  field = input.required<() => FieldState<any, string | number>>();
  params = input.required<NgdsfFieldParams>({});

  contentTemplate = contentChild(TemplateRef);
}
