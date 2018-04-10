import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { SharedModule } from './shared/shared.module';
import { WorkspaceService } from './services/workspace.service';

import { WorkspaceComponent } from './workspace.component';

@NgModule({
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    SharedModule
  ],
  declarations: [
    WorkspaceComponent
  ],
  providers: [
    WorkspaceService
  ]
})
export class WorkspaceModule { }
