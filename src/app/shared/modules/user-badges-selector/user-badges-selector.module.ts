import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBadgesSelectorComponent } from './user-badges-selector.component';



@NgModule({
  declarations: [
    UserBadgesSelectorComponent
  ],
  exports: [
    UserBadgesSelectorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserBadgesSelectorModule { }
