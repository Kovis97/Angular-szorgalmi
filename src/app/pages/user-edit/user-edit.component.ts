import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../users/classes/user';
import { UserService } from '../users/Services/user.service';

@Component({
	selector: 'app-user-edit',
	templateUrl: './user-edit.component.html',
	styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
	user: User;

	constructor(
		private route: ActivatedRoute,
		private userService: UserService,
		) {
	}

	ngOnInit(): void {
		const userId = parseInt(this.route.snapshot.paramMap.get('id'));
		this.userService.getUser(userId).subscribe({
			next: (user: User) => {
				this.user = user;
			}
		})
	}
 

}
