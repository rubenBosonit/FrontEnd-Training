import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, NgForm, ValidationErrors } from '@angular/forms';
import { TemplateFormService } from '../services/template-form.service';
import { Country } from '../interfaces/countries.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
    `
      mat-form-field {
        margin-bottom: 12px;
      }
    `,
  ],
})
export class FormComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm;

  countryList: Country[] = [];
  userSelectedKey: number = -1;
  saveButtonVisible: boolean = true;
  editButtonVisible: boolean = false;

  constructor(private tempFormsService: TemplateFormService) {}

  ngOnInit(): void {
    this.tempFormsService.formComponent = this;
    this.tempFormsService.editButtonEnabled.subscribe((activated) => {
      this.saveButtonVisible = !activated;
      this.editButtonVisible = activated;
    });
    this.tempFormsService.getCountries().subscribe((countries) => {
      this.countryList = countries;
    });
  }

  invalidField(campo: string) {
    return (
      this.myForm?.controls[campo]?.errors &&
      this.myForm?.controls[campo]?.touched
    );
  }

  invalidCountry() {
    if (this.myForm?.controls['country']?.value === '') {
      return true;
    }
    return false;
  }

  invalidPassword() {
    if (
      this.myForm?.controls['password1']?.value !==
      this.myForm?.controls['password2']?.value
    ) {
      return true;
    } else {
      return false;
    }
  }

  createUser() {
    if (this.myForm.form.invalid) {
      return;
    }
    let name = this.myForm.form.controls['name'].value;
    let username = this.myForm.form.controls['username'].value;
    let password = this.myForm.form.controls['password1'].value;
    let email = this.myForm.form.controls['email'].value;
    let notifications = this.myForm.form.controls['notifications'].value;
    let country = this.myForm.form.controls['country'].value;
    let city = this.myForm.form.controls['city'].value;

    let user = {
      id: 0,
      name: name,
      username: username,
      password: password,
      email: email,
      notifications: notifications,
      country: country,
      city: city,
    };

    if (this.editButtonVisible === true) {
      user.id = this.tempFormsService.editedUserId;
      this.tempFormsService
        .updateUser(user)
        .pipe(switchMap(() => this.tempFormsService.getUsers()))
        .subscribe((users) => {
          this.tempFormsService.tableComponent.dataSource = users;
          this.editButtonVisible = false;
          this.saveButtonVisible = true;
        });
    } else {
      let length = this.tempFormsService.tableComponent.dataSource.length;
      let newId: number = 0;
      if (length !== 0) {
        newId = this.tempFormsService.tableComponent.dataSource[length - 1].id!;
        newId++;
      }
      user.id = newId;

      this.tempFormsService
        .createUser(user)
        .pipe(switchMap(() => this.tempFormsService.getUsers()))
        .subscribe((users) => {
          this.tempFormsService.tableComponent.dataSource = users;
        });
    }

    this.myForm.resetForm([
      { name: '' },
      { username: '' },
      { email: '' },
      { notifications: false },
      { country: '' },
      { city: '' },
    ]);
    this.tempFormsService.editButtonEnabled.next(false);
  }

  // checkSamePasswords() {
  //   return (formGroup: AbstractControl): ValidationErrors | null => {
  //     if (
  //       this.myForm?.controls['password1']?.value !==
  //       this.myForm?.controls['password2']?.value
  //     ) {
  //       return { passwordCheck: 'failed' };
  //     } else {
  //       return null;
  //     }
  //   };
  // }
}
