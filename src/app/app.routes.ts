import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () => import('./modules/pages/index/index.page').then(m => m.IndexPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./modules/pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'siginup',
    loadComponent: () => import('./modules/pages/siginup/siginup.page').then(m => m.SiginupPage)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'nav',
    loadComponent: () => import('./modules/components/nav/nav.page').then( m => m.NavPage)
  },
  {
    path: 'slide',
    loadComponent: () => import('./modules/components/slide/slide.page').then( m => m.SlidePage)
  },

];
