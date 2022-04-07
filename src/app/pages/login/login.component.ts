import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/modules/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private authService: AuthService) {}

  ngOnInit(): void {
  }

  login() {
    localStorage.setItem('loggedIn', 'true');
    this.authService.emitLoggedInUserChnage(true);
    
    this.router.navigate(['home']);
  }

}
