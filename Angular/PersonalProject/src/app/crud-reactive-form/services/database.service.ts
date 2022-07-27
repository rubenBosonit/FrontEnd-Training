import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../interfaces/users.interface';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private baseUrl: string = environment.baseUrl;
  private apiURL: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/users/${id}`);
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/all?fields=name`);
  }
}
