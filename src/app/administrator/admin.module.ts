import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './page/auth/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { BasicInfoComponent } from './page/basic-info/basic-info.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    LoginComponent,
    BasicInfoComponent,
    DashboardComponent
  ],
})
export class AdminModule {
}
