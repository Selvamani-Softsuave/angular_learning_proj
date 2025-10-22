import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Dashboard } from './features/dashboard/dashboard';
import { UsersList } from './features/users/users-list/users-list';
import { UserDetail } from './features/users/user-detail/user-detail';
import { Sidebar } from './core/layouts/sidebar/sidebar';
import { Footer } from './core/layouts/footer/footer';
import { Header } from './core/layouts/header/header';
import { RouterLink } from '@angular/router';
import { AuthModule } from './auth/auth-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersModule } from './features/users/users-module';
import { DashboardModule } from './features/dashboard/dashboard-module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Login,
    Register,
    Dashboard,
    UsersList,
    UserDetail,
    Sidebar,
    Footer,
    Header
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterLink,
    AuthModule,
    UsersModule,
    DashboardModule,
    ReactiveFormsModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
