import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home-page-component/home-page-component').then(c => c)
  },
  {
    path: 'first-observable',
    loadComponent: () => import('./section-3/first-observable/first-observable').then(c => c)
  },
  {
    path: 'observer-and-subscriber',
    loadComponent: () => import('./section-3/observer-and-subscriber/observer-and-subscriber').then(c => c)
  },
  {
    path: 'subscription-and-unsubscribe',
    loadComponent: () => import('./section-3/subscription-and-unsubscribe/subscription-and-unsubscribe').then(c => c)
  },
  {
    path: 'chain-observable',
    loadComponent: () => import('./section-3/chain-observable/chain-observable').then(c => c)
  },
  {
    path: 'subject-part1',
    loadComponent: () => import('./section-3/subject-part1/subject-part1').then(c => c)
  },
  {
    path: 'subject-part2',
    loadComponent: () => import('./section-3/subject-part2/subject-part2').then(c => c)
  },
  {
    path: 'of',
    loadComponent: () => import('./section-4/of/of').then(c => c)
  },
  {
    path: 'from-event',
    loadComponent: () => import('./section-4/from-event/from-event').then(c => c)
  },
  {
    path: 'range',
    loadComponent: () => import('./section-4/range/range').then(c => c)
  },
  {
    path: 'interval-timer',
    loadComponent: () => import('./section-4/interval-timer/interval-timer').then(c => c)
  },
  {
    path: 'observable-on',
    loadComponent: () => import('./section-4/observable-on/observable-on').then(c => c)
  },
  {
    path: 'async-cheduler',
    loadComponent: () => import('./section-4/async-cheduler/async-cheduler').then(c => c)
  },
  {
    path: 'from',
    loadComponent: () => import('./section-4/from/from').then(c => c)
  },
  {
    path: 'first-value-from',
    loadComponent: () => import('./section-4/first-value-from/first-value-from').then(c => c)
  },
  {
    path: 'last-value-from',
    loadComponent: () => import('./section-4/last-value-from/last-value-from').then(c => c)
  },
  {
    path: 'progress-bar-lab',
    loadComponent: () => import('./section-5/progress-bar-lab/progress-bar-lab').then(c => c)
  },
  {
    path: 'take',
    loadComponent: () => import('./section-6/take/take').then(c => c)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
