import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from '../services/email-validator.service';
import { ReactiveFormService } from '../services/validations.service';
import { UsernameValidatorService } from '../services/username-validator.service';
import { DatabaseService } from '../services/database.service';
import { Country } from '../interfaces/countries.interface';
import { SharedService } from '../services/shared.service';
import { User } from '../interfaces/users.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  userIdSelected: number = -1;
  editEnabled: boolean = false;
  countries: Country[] = [];

  myForm: FormGroup = this.fb.group(
    {
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['', Validators.required, [this.usernameValidator]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(this.reactiveCrudService.passwordPattern),
        ],
      ],
      password2: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.reactiveCrudService.emailPattern),
        ],
        [this.emailValidator],
      ],
      promotion: [false],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
    },
    {
      validators: [
        this.reactiveCrudService.equalFields('password', 'password2'),
      ],
    }
  );

  constructor(
    private fb: FormBuilder,
    private emailValidator: EmailValidatorService,
    private usernameValidator: UsernameValidatorService,
    private reactiveCrudService: ReactiveFormService,
    private databaseService: DatabaseService,
    private sharedService: SharedService
  ) {
    this.sharedService.formComponent = this;
  }

  ngOnInit() {
    this.databaseService
      .getCountries()
      .subscribe((countries) => (this.countries = countries));
    this.sharedService.editButtonEnabled.subscribe(
      (value) => (this.editEnabled = value)
    );
    this.sharedService.userIdSelected.subscribe(
      (value) => (this.userIdSelected = value)
    );
  }

  isFieldInvalid(field: string) {
    if (
      !this.myForm.controls[field].touched ||
      !this.myForm.controls[field].errors
    ) {
      return;
    }

    const error = this.myForm.controls[field].errors;
    if (error!['required']) {
      return `${field} field is required`;
    }
    switch (field) {
      case 'username':
        return 'Username already in use';
      case 'password':
        if (error!['minlength']) {
          return 'Password must have at least 6 characters';
        } else {
          return 'Password must contain at least one letter and one number';
        }
      case 'email':
        if (error!['pattern']) {
          return 'Introduce a valid email';
        } else {
          return 'Email already in use';
        }
      case 'password2':
        return 'Both passwords must coincide';
      default:
        return '';
    }
  }

  saveUser() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const {
      name,
      lastname,
      username,
      password,
      email,
      promotion,
      country,
      city,
    } = this.myForm.controls;
    const promo = promotion.value == false ? false : true;

    if (!this.editEnabled) {
      const usersListLength = this.sharedService.tableComponent.users.length;
      const lastRegisteredId =
        this.sharedService.tableComponent.users[usersListLength - 1].id! | 0;

      const newUser: User = {
        id: lastRegisteredId + 1,
        name: name.value,
        lastname: lastname.value,
        username: username.value,
        password: password.value,
        email: email.value,
        promotion: promo,
        country: country.value.name,
        city: city.value,
      };
      this.databaseService
        .createUser(newUser)
        .pipe(switchMap(() => this.databaseService.getUsers()))
        .subscribe((users) => {
          this.sharedService.tableComponent.users = users;
        });
    } else {
      const editedUser: User = {
        id: this.userIdSelected,
        name: name.value,
        lastname: lastname.value,
        username: username.value,
        password: password.value,
        email: email.value,
        promotion: promo,
        country: country.value.name,
        city: city.value,
      };
      this.databaseService
        .updateUser(editedUser)
        .pipe(switchMap(() => this.databaseService.getUsers()))
        .subscribe((users) => {
          this.sharedService.tableComponent.users = users;
          this.sharedService.editButtonEnabled.next(false);
          this.sharedService.userIdSelected.next(-1);
          this.emailValidator.editedUserEmail = '';
          this.usernameValidator.editedUserUsername = '';
        });
    }

    this.sharedService.formComponent.myForm.reset({
      name: '',
      lastname: '',
      username: '',
      password: '',
      password2: '',
      email: '',
      promotion: false,
      country: '',
      city: '',
    });
  }
}
