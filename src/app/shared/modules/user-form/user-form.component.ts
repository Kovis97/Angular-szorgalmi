import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Badge } from 'src/app/pages/badge/classes/badge';
import { BadgeService } from 'src/app/pages/badge/service/badge.service';
import { User } from 'src/app/pages/users/classes/user';
import { UserService } from 'src/app/pages/users/Services/user.service';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() user: User;

  userForm: FormGroup;

  selectBadges: { [key: string]: boolean } = {};


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  mapSelectedBadges() {
    return Object.keys(this.selectBadges).filter((key: string) => {
      return this.selectBadges[key] == true;
    }).map((key: string) => {
      return { id: parseInt(key) }
    });
  }

  goback() {
    this.router.navigate(['users']);
  }

  saveForm() {
    const userFormValue: User = this.userForm.getRawValue();
    userFormValue.badges = this.mapSelectedBadges();

    if (this.isCreateMode) {
      this.userService.createUser(userFormValue).subscribe({
        next: () => {
          this.router.navigate(['users']);
        }
      })
    } else {
      this.userService.editUser(userFormValue, this.user.id).subscribe({
        next: () => {
          this.router.navigate(['users']);
        }
      })
    }
  }

  getControll(name: string): AbstractControl {
    return this.userForm.get(name);
  }

  isControllRequired(name: string): boolean {
    return this.getControll(name).hasValidator(Validators.required);
  }

  isControllRequiredAndTouched(name: string): boolean {
    const FormControl = this.getControll(name);
    const isREquired = FormControl.hasValidator(Validators.required);
    const isTouched = FormControl.touched;
    return isREquired && isTouched;
  }

  isControllInvalid(name: string): boolean {
    return this.getControll(name).invalid;
  }

  hasError(controllName: string, errorCode: string): boolean {
    return this.getControll(controllName).hasError(errorCode);
  }

  private initForm() {
    this.userForm = this.formBuilder.group({
      name: [this.user?.name, [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
      image: [this.user?.image, [Validators.required, Validators.minLength(3)]]
    });
  }

  get isCreateMode(): boolean {
    return !this.user;
  }
}
