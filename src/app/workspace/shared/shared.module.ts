import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WsUrlComponent } from './ws-url/ws-url.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [WsUrlComponent],
  exports: [WsUrlComponent],
})
export class SharedModule { }
