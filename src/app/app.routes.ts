import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './customers/components/main/main.component';

export const routes: Routes = [
  { title: 'Le Quang Nhut | Home', path: 'home', component: MainComponent },
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
