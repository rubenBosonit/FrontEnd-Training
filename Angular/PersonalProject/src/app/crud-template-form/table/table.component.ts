import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTable } from '@angular/material/table';
import { switchMap } from 'rxjs';
import { User } from '../interfaces/users.interface';
import { TemplateFormService } from '../services/template-form.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @ViewChild('myTable') myTable!: MatTable<string>;

  countryList: string[] = [];
  userSelectedKey: number = -1;
  saveButtonVisible: boolean = true;
  editButtonVisible: boolean = false;

  displayedColumns: string[] = [
    'name',
    'username',
    'email',
    'notifications',
    'country',
    'city',
    'actions',
  ];

  dataSource: User[] = [];

  constructor(private tempFormsService: TemplateFormService) {
    this.tempFormsService.tableComponent = this;
  }

  ngOnInit(): void {
    this.tempFormsService
      .getUsers()
      .subscribe((users) => (this.dataSource = users));
  }

  displayNotificationsIcon(preferencies: boolean) {
    if (preferencies === true) {
      return 'done';
    }

    return 'close';
  }

  editUser(user: User) {
    let { name, username, password1, email, notifications, country, city } =
      this.tempFormsService.formComponent.myForm.form.controls;

    name.setValue(user.name);
    username.setValue(user.username);
    password1.setValue(user.password);
    email.setValue(user.email);
    notifications.setValue(user.notifications);
    country.setValue(user.country);
    city.setValue(user.city);

    for (const [key, value] of Object.entries(this.dataSource)) {
      if (value === user) {
        this.userSelectedKey = parseInt(key);
      }
    }

    this.tempFormsService.editButtonEnabled.next(true);
  }

  deleteUser(user: User) {
    this.tempFormsService
      .deleteUser(user.id!)
      .pipe(switchMap(() => this.tempFormsService.getUsers()))
      .subscribe((users) => (this.dataSource = users));
  }
}
