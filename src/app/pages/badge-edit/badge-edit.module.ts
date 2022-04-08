import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeEditComponent } from './badge-edit.component';
import { BadgeFormModule } from 'src/app/shared/modules/badge-form/badge-form.module';



@NgModule({
  declarations: [
    BadgeEditComponent
  ],
  imports: [
    CommonModule,
    BadgeFormModule
  ]
})
export class BadgeEditModule { }
