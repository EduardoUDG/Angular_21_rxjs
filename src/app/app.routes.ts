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
    path: '**',
    redirectTo: ''
  }
];
