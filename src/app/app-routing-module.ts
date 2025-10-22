import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import login and register components

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'auth', loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule)},
  {path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard-module').then(m => m.DashboardModule)},
  {path: 'users', loadChildren: () => import('./features/users/users-module').then(m => m.UsersModule)},
  {path: '**', redirectTo: '/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
