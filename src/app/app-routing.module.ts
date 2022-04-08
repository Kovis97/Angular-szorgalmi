import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { BadgeComponent } from './pages/badge/badge.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './shared/modules/auth/auth.guard';
import { BadgeEditComponent } from './pages/badge-edit/badge-edit.component';
import { BadgeCreateComponent } from './pages/badge-create/badge-create.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'user-create', component: UserCreateComponent, canActivate: [AuthGuard] },
  { path: 'user-edit/:id', component: UserEditComponent, canActivate: [AuthGuard] },
  { path: 'badges', component: BadgeComponent, canActivate: [AuthGuard] },
  { path: 'badge-create', component: BadgeCreateComponent, canActivate: [AuthGuard] },
  { path: 'badge-edit/:id', component: BadgeEditComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home' },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }