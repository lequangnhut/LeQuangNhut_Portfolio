import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {LoginComponent} from './components/auth/login/login.component';
import {DashboardComponent} from "./components/page/dashboard/dashboard.component";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    LoginComponent,
    DashboardComponent
  ],
})
export class AdminModule {
}
