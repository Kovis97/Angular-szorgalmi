import { Component, OnInit } from '@angular/core';
import { Badge } from './classes/badge';
import { BadgeService } from './service/badge.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  badges: Badge[];

  constructor(private badgeService: BadgeService) { }

  ngOnInit(): void {
    this.getBadges();
  }

  private getBadges() {
    this.badgeService.getBadges().subscribe({
      next: (badges: Badge[]) => {
        this.badges = badges;
      }
    });
  }

}
