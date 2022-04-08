import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeFormComponent } from './badge-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BadgeFormComponent
  ],
  exports: [
    BadgeFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class BadgeFormModule { }
