import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ProjectDetailPage } from './pages/project-detail-page/project-detail-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'projects/:slug',
    component: ProjectDetailPage,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
