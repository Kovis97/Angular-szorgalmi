import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeCreateComponent } from './badge-create.component';
import { BadgeFormModule } from 'src/app/shared/modules/badge-form/badge-form.module';



@NgModule({
  declarations: [
    BadgeCreateComponent
  ],
  imports: [
    CommonModule,
    BadgeFormModule
  ]
})
export class BadgeCreateModule { }
