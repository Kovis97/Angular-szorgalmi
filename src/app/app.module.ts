import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from './shared/modules/header/header.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { UsersModule } from './pages/users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { BadgeModule } from './pages/badge/badge.module';
import { UserCreateModule } from './pages/user-create/user-create.module';
import { UserEditModule } from './pages/user-edit/user-edit.module';
import { LoginModule } from './pages/login/login.module';
import { BadgeEditModule } from './pages/badge-edit/badge-edit.module';
import { BadgeCreateModule } from './pages/badge-create/badge-create.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    HeaderModule, 
    HomeModule, 
    UsersModule, 
    UserCreateModule,
    UserEditModule,
    BadgeModule,
    BadgeEditModule,
    BadgeCreateModule,
    AppRoutingModule, 
    RouterModule, 
    HttpClientModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
