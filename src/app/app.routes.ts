import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './administrator/components/auth/login/login.component';

export const routes: Routes = [
  { title: 'Le Quang Nhut | Login', path: 'login', component: LoginComponent },
  { title: 'Le Quang Nhut | Home', path: 'home', component: AppComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./administrator/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./customers/customer.module').then((m) => m.CustomerModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
