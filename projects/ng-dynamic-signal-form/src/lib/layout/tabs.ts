import { Component, computed, input, signal } from '@angular/core';

export interface NgdsfTab {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface NgdsfTabsParams {
  tabs: NgdsfTab[];
  className?: string;
  activeTabId?: string;
}

@Component({
  selector: 'ngdsf-tabs',
  template: `
    <div [class]="'tabs-container ' + (params().className || '')">
      <div class="tabs-header" role="tablist">
        @for (tab of params().tabs; track tab.id) {
          <button
            type="button"
            role="tab"
            [attr.aria-selected]="activeTab() === tab.id"
            [attr.aria-controls]="'tab-panel-' + tab.id"
            [attr.id]="'tab-' + tab.id"
            [disabled]="tab.disabled"
            [class]="'tab-button' + (activeTab() === tab.id ? ' active' : '')"
            (click)="setActiveTab(tab.id)"
          >
            {{ tab.label }}
          </button>
        }
      </div>
      <div class="tabs-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .tabs-container {
      margin: 1rem 0;
    }
    .tabs-header {
      display: flex;
      border-bottom: 2px solid #e0e0e0;
      gap: 0.25rem;
    }
    .tab-button {
      padding: 0.75rem 1.5rem;
      background: transparent;
      border: none;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      font-size: 1rem;
      color: #666;
      transition: all 0.2s;
      margin-bottom: -2px;
    }
    .tab-button:hover:not(:disabled) {
      color: #333;
      background: #f5f5f5;
    }
    .tab-button.active {
      color: #1976d2;
      border-bottom-color: #1976d2;
      font-weight: 600;
    }
    .tab-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .tabs-content {
      padding: 1.5rem 0;
    }
  `],
})
export class NgdsfTabs {
  params = input.required<NgdsfTabsParams>();
  private userSelectedTab = signal<string | null>(null);

  activeTab = computed(() => {
    // User selection takes precedence
    const userTab = this.userSelectedTab();
    if (userTab !== null) {
      return userTab;
    }
    // Otherwise use the provided activeTabId or first tab
    return this.params().activeTabId || this.params().tabs[0]?.id || '';
  });

  setActiveTab(tabId: string) {
    this.userSelectedTab.set(tabId);
  }
}
