import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsernameValidatorService implements AsyncValidator {
  public editedUserUsername: string = '';
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const username = control.value;

    return this.http
      .get<any[]>(`${this.baseUrl}/users?username=${username}`)
      .pipe(
        map((resp) => {
          if (this.editedUserUsername === username) {
            return null;
          }
          return resp.length === 0 ? null : { takenUsername: true };
        })
      );
  }
}
