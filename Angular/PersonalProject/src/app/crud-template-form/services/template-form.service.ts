import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/users.interface';
import { Observable, Subject } from 'rxjs';
import { FormComponent } from '../form/form.component';
import { TableComponent } from '../table/table.component';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root',
})
export class TemplateFormService {
  public formComponent!: FormComponent;
  public tableComponent!: TableComponent;

  public editButtonEnabled = new Subject<boolean>();
  public editedUserId: number = -1;

  private baseUrl: string = environment.baseUrl;
  private apiURL: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  setEditedUserId(newId: number) {
    this.editedUserId = newId;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/users/${user.id}`, user);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, user);
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/all?fields=name`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/users/${id}`);
  }
}
