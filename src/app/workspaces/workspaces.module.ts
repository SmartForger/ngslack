import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspacesRoutingModule } from './workspaces-routing.module';
import { WorkspacesComponent } from './workspaces.component';

@NgModule({
  imports: [
    CommonModule,
    WorkspacesRoutingModule
  ],
  declarations: [WorkspacesComponent]
})
export class WorkspacesModule { }
