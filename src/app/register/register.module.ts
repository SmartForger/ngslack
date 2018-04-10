import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule } from '@angular/material';

import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from '../shared/shared.module';

import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule,

    MatButtonModule,
    MatInputModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
