import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './components/auth/login/login.component';

@NgModule({
  imports: [CommonModule, AdminRoutingModule, LoginComponent],
})
export class AdminModule {}
