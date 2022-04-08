import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Badge } from 'src/app/pages/badge/classes/badge';
import { BadgeService } from 'src/app/pages/badge/service/badge.service';
import { User } from 'src/app/pages/users/classes/user';

@Component({
  selector: 'app-user-badges-selector',
  templateUrl: './user-badges-selector.component.html',
  styleUrls: ['./user-badges-selector.component.scss']
})
export class UserBadgesSelectorComponent implements OnInit {
  @Input() user: User;
  @Output() selectBtnClicked: EventEmitter<{[key: string]: boolean }> = new EventEmitter<{[key: string]: boolean }>(); 
  
  
  selectBadges: { [key: string]: boolean } = {}
  badges: Badge[];


  constructor(
    private badgeService: BadgeService,
  ) { }

  ngOnInit(): void {
    this.getBadges();
    this.initSelectedBadges();
  }

  initSelectedBadges() {
    if (this.user && this.user.badges) {
      for (const badge of this.user?.badges) {
        this.selectBadges[badge.id] = true;
      }
    }
  }

  isBadgeSelected(badgeId: number):boolean {
    return !!this.selectBadges[badgeId.toString()];
  }

  toggleSelectedBadge(badgeID: number):void {
    const badgeIdStr = badgeID.toString();

    this.selectBadges[badgeIdStr] = !this.selectBadges[badgeIdStr];
    
    this.selectBtnClicked.emit(this.selectBadges);
  }

  private getBadges() {
    this.badgeService.getBadges().subscribe({
      next: (badges: Badge[]) => {
        this.badges = badges;
      }
    });
  }

}
