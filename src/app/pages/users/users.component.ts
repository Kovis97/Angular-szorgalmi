import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Badge } from '../badge/classes/badge';
import { BadgeService } from '../badge/service/badge.service';
import { User } from './classes/user';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  badges: Badge[];

  constructor(
    private userService: UserService,
    private router: Router,
    private badgeService: BadgeService
    ) {}

  ngOnInit(): void {
    this.getUsers();
    this.getBadges();
  }

  navigateToCreateUSer() {
    this.router.navigate(['user-create']);
  }

  navigateToEditUSer(userId: number) {
    this.router.navigate([`user-edit/${userId}`]);
  }

  removeUser(user: User) {
    this.userService.removeUser(user.id).subscribe({
      next: () => {
        this.getUsers();
      }
    });
  }

  private getUsers() {
    this.userService.getUsers().subscribe({
      next: (users: User[]) => {
        this.users = users
      }
    });
  }

    private getBadges() {
      this.badgeService.getBadges().subscribe({
        next: (badges: Badge[]) => {
          this.badges = badges
        }
      });
  }
}
