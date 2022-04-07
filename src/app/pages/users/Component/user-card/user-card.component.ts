import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Badge } from 'src/app/pages/badge/classes/badge';
import { User } from '../../classes/user';
import { UserBadge } from '../../classes/user-badge';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
 @Input() user: User;
 @Input() badges: Badge[];

 @Output() removeBtnClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {

  }

  emitRemoveBtnClick(event: Event) {
    event.stopPropagation();

    this.removeBtnClicked.emit();
  }

  getBadgeImage(badge: UserBadge) {    
    const badgeDetail = this.badges.find((curBadges: Badge) => {
      return curBadges.id == badge.id;
    });

    return badgeDetail.image;
  }
}
