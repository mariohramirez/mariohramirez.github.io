import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

export const LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('../home/home.component').then(m => m.HomeComponent)
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];