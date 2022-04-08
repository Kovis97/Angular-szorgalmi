import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserBadgesSelectorModule } from '../user-badges-selector/user-badges-selector.module';



@NgModule({
  declarations: [
    UserFormComponent,
  ],
  exports: [
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UserBadgesSelectorModule,
    ReactiveFormsModule
  ]
})
export class UserFormModule { }
