import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Badge } from 'src/app/pages/badge/classes/badge';
import { BadgeService } from 'src/app/pages/badge/service/badge.service';

@Component({
  selector: 'app-badge-form',
  templateUrl: './badge-form.component.html',
  styleUrls: ['./badge-form.component.scss']
})
export class BadgeFormComponent implements OnInit {
  @Input() badge: Badge;

  badgeForm: FormGroup;

  constructor(
    private formBuldier: FormBuilder,
    private badgeService: BadgeService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  goBack() {
    this.router.navigate(['badges']);
  }

  saveForm() {
    const badgeFormValue: Badge = this.badgeForm.getRawValue();

    if (this.isCreateMode) {
      this.badgeService.createBadge(badgeFormValue).subscribe({
        next: () => {
          this.router.navigate(['badges']);
        }
      })
    } else {
      this.badgeService.editBadge(badgeFormValue, this.badge.id).subscribe({
        next: () => {
          this.router.navigate(['badges']);
        }
      })
    }
  }

  getControll(name: string): AbstractControl {
    return this.badgeForm.get(name);
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
    this.badgeForm = this.formBuldier.group({
      name: [this.badge?.name, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: [this.badge?.description, [Validators.required, Validators.minLength(3)]],
      image: [this.badge?.image, [Validators.required, Validators.minLength(3)]],
    });
  }

  get isCreateMode(): boolean {
    return !this.badge;
  }
}
