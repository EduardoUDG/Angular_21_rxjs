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
    path: '**',
    redirectTo: ''
  }
];
