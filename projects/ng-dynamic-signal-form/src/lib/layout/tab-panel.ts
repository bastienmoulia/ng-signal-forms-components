import { Component, input } from '@angular/core';

export interface NgdsfTabPanelParams {
  tabId: string;
  activeTabId: string;
}

@Component({
  selector: 'ngdsf-tab-panel',
  template: `
    @if (params().tabId === params().activeTabId) {
      <div 
        role="tabpanel"
        [attr.id]="'tab-panel-' + params().tabId"
        [attr.aria-labelledby]="'tab-' + params().tabId"
        class="tab-panel"
      >
        <ng-content></ng-content>
      </div>
    }
  `,
  styles: [`
    .tab-panel {
      animation: fadeIn 0.2s;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `],
})
export class NgdsfTabPanel {
  params = input.required<NgdsfTabPanelParams>();
}
