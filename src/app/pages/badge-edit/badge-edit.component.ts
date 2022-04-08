import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Badge } from '../badge/classes/badge';
import { BadgeService } from '../badge/service/badge.service';

@Component({
  selector: 'app-badge-edit',
  templateUrl: './badge-edit.component.html',
  styleUrls: ['./badge-edit.component.scss']
})
export class BadgeEditComponent implements OnInit {
  badge: Badge;

  constructor(
    private router: ActivatedRoute,
    private badgeService: BadgeService,
  ) { }

  ngOnInit(): void {
    const badgeId = parseInt(this.router.snapshot.paramMap.get('id'));
    this.badgeService.getBadge(badgeId).subscribe({
      next: (badge: Badge) => {
        this.badge = badge;
      }
    })
  }

}
