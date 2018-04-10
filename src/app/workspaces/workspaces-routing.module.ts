import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkspacesComponent } from './workspaces.component';

const routes: Routes = [
  {
    path: '',
    component: WorkspacesComponent,
    children: [
      {
        path: '',
        loadChildren: './list/list.module#ListModule'
      },
      {
        path: 'create',
        loadChildren: './create/create.module#CreateModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspacesRoutingModule { }
