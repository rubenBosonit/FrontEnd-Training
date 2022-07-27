import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService implements AsyncValidator {
  public editedUserEmail: string = '';

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    console.log("1-'" + this.editedUserEmail + "'");
    console.log("2.'" + email + "'");

    return this.http.get<any[]>(`${this.baseUrl}/users?email=${email}`).pipe(
      map((resp) => {
        if (this.editedUserEmail === email) {
          return null;
        }
        return resp.length === 0 ? null : { takenEmail: true };
      })
    );
  }
}
