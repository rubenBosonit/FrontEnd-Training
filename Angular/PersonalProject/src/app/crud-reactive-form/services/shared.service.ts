import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FormComponent } from '../form/form.component';
import { TableComponent } from '../table/table.component';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public formComponent!: FormComponent;
  public tableComponent!: TableComponent;

  public editButtonEnabled = new Subject<boolean>();
  // public userIdSelected: number = -1; //NO SE SETEA DESDE EL COMPONENTE TABLA
  public userIdSelected = new Subject<number>();
  constructor() {}
}
