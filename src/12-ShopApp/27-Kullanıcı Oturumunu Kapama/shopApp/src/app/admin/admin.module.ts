import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [AdminComponent,AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  providers:[AuthGuard]
})
export class AdminModule { }
