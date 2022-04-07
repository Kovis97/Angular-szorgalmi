import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser: boolean;
  loggedInUserStatusChange: Subject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.initLogInUser();
  }

  initLogInUser() {
    this.loggedInUser = localStorage.getItem('loggedIn') == 'true';

    this.emitLoggedInUserChnage(this.loggedInUser);

  }

  emitLoggedInUserChnage(loggedInUser: boolean) {
    this.loggedInUser = loggedInUser;
    this.loggedInUserStatusChange.next(loggedInUser); 
  }
}
