import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ReactiveFormService {
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  public passwordPattern: string = '^.*[a-zA-Z].*$' && '^.*[0-9].*$';

  constructor() {}

  equalFields(campo1: string, campo2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if (pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({ notEqual: true });
        return { notEqual: true };
      }

      formGroup.get(campo2)?.setErrors(null);

      return null;
    };
  }
}
