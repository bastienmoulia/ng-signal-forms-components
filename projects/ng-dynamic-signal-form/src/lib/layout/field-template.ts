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
  template: `
    @if(field() !== undefined && field()() !== undefined) {
    <label>
      @if (params().label) {
      {{ params().label }}
      {{ field()().required?.() ? '*' : '' }}
      } @if (contentTemplate()) {
      <ng-container *ngTemplateOutlet="contentTemplate()" />
      }
    </label>
    @if (field()().touched() && field()().invalid()) {
    <ul>
      @for (error of field()().errors(); track $index) {
      <li>{{ error.message }}</li>
      }
    </ul>
    } }
  `,
})
export class NgdsfFieldTemplate {
  field = input.required<() => FieldState<any, string | number>>();
  params = input.required<NgdsfFieldParams>({});

  contentTemplate = contentChild(TemplateRef);
}
