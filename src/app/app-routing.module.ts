import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'workspaces'
  },
  {
    path: 'workspaces',
    loadChildren: './workspaces/workspaces.module#WorkspacesModule'
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: ':wsID',
    loadChildren: './workspace/workspace.module#WorkspaceModule'
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
