import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge.component';
import { BadgeCardComponent } from './component/badge-card/badge-card.component';



@NgModule({
  declarations: [
    BadgeComponent,
    BadgeCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BadgeModule { }
