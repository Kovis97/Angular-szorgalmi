import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Badge } from './classes/badge';
import { BadgeService } from './service/badge.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  badges: Badge[];
  displayMode: number;

  constructor(private badgeService: BadgeService, private router: Router) {
    this.displayMode = 1;
  }

  ngOnInit(): void {
    this.getBadges();
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }

  getDisplayMode():number {
    return this.displayMode;
  }

  navigateToCreateBadge() {
    this.router.navigate(['badge-create']);
  }

  navigateToEditBadge(badgeId: number) {
    this.router.navigate([`badge-edit/${badgeId}`]);
  }

  removeBadge(badge: Badge) {
    this.badgeService.removeBadge(badge.id).subscribe({
      next: () => {
        this.getBadges();
      }
    });
  }

  private getBadges() {
    this.badgeService.getBadges().subscribe({
      next: (badges: Badge[]) => {
        this.badges = badges;
      }
    });
  }

}
