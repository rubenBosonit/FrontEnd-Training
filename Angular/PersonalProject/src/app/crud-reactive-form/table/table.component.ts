import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { User } from '../interfaces/users.interface';
import { DatabaseService } from '../services/database.service';
import { EmailValidatorService } from '../services/email-validator.service';
import { SharedService } from '../services/shared.service';
import { UsernameValidatorService } from '../services/username-validator.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  users: User[] = [];

  constructor(
    private sharedService: SharedService,
    private databaseService: DatabaseService,
    private emailValidatorService: EmailValidatorService,
    private usernameValidatorService: UsernameValidatorService
  ) {
    this.sharedService.tableComponent = this;
  }

  ngOnInit(): void {
    this.databaseService.getUsers().subscribe((users) => (this.users = users));
  }

  editUser(user: User) {
    this.sharedService.editButtonEnabled.next(true);
    this.sharedService.userIdSelected.next(user.id!);

    this.emailValidatorService.editedUserEmail = user.email;
    this.usernameValidatorService.editedUserUsername = user.username;

    this.sharedService.formComponent.myForm.reset({
      name: user.name,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
      password: user.password,
      promotion: user.promotion ? ['promotion'] : [],
      country: { name: user.country, independent: false },
      city: user.city,
    });
  }

  deleteUser(userId: number) {
    this.databaseService
      .deleteUser(userId)
      .pipe(switchMap(() => this.databaseService.getUsers()))
      .subscribe((users) => (this.users = users));
  }
}
