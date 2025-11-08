import { Component, input } from '@angular/core';

export interface NgdsfFieldGroupParams {
  title?: string;
  description?: string;
  className?: string;
  collapsible?: boolean;
  collapsed?: boolean;
}

@Component({
  selector: 'ngdsf-field-group',
  template: `
    <fieldset [class]="'field-group ' + (params().className || '')">
      @if (params().title) {
        <legend class="field-group-title">{{ params().title }}</legend>
      }
      @if (params().description) {
        <p class="field-group-description">{{ params().description }}</p>
      }
      <div class="field-group-content">
        <ng-content></ng-content>
      </div>
    </fieldset>
  `,
  styles: [`
    .field-group {
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      padding: 1rem;
      margin: 1rem 0;
    }
    .field-group-title {
      font-size: 1.125rem;
      font-weight: 600;
      color: #333;
      padding: 0 0.5rem;
    }
    .field-group-description {
      color: #666;
      font-size: 0.875rem;
      margin: 0.5rem 0 1rem 0;
    }
    .field-group-content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `],
})
export class NgdsfFieldGroup {
  params = input<NgdsfFieldGroupParams>({});
}
