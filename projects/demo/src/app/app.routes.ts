import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/layout').then((m) => m.Layout),
    children: [
      {
        path: '',
        redirectTo: 'getting-started',
        pathMatch: 'full',
      },
      {
        path: 'getting-started',
        loadComponent: () =>
          import('./pages/getting-started/getting-started').then((m) => m.GettingStarted),
      },
      {
        path: 'installation',
        loadComponent: () => import('./pages/installation/installation').then((m) => m.Installation),
      },
      {
        path: 'components/text-inputs',
        loadComponent: () => import('./pages/components/text-inputs').then((m) => m.TextInputs),
      },
      {
        path: 'components/number-inputs',
        loadComponent: () => import('./pages/components/number-inputs').then((m) => m.NumberInputs),
      },
      {
        path: 'components/date-time-inputs',
        loadComponent: () =>
          import('./pages/components/date-time-inputs').then((m) => m.DateTimeInputs),
      },
      {
        path: 'components/selection-inputs',
        loadComponent: () =>
          import('./pages/components/selection-inputs').then((m) => m.SelectionInputs),
      },
      {
        path: 'components/other-inputs',
        loadComponent: () => import('./pages/components/other-inputs').then((m) => m.OtherInputs),
      },
      {
        path: 'components/validation',
        loadComponent: () => import('./pages/components/validation').then((m) => m.Validation),
      },
      {
        path: 'components/layout',
        loadComponent: () => import('./pages/components/layout').then((m) => m.LayoutDocs),
      },
      {
        path: 'api/field-types',
        loadComponent: () => import('./pages/api/field-types').then((m) => m.FieldTypes),
      },
      {
        path: 'api/field-params',
        loadComponent: () => import('./pages/api/field-params').then((m) => m.FieldParams),
      },
    ],
  },
];
