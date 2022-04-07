import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserCardComponent } from './Component/user-card/user-card.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
