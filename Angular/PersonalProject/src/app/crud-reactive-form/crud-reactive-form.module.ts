import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';

import { CrudReactive } from './crud-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [CrudReactive, FormComponent, TableComponent],
  imports: [
    ButtonModule,
    CommonModule,
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    ReactiveFormsModule,
    TableModule,
  ],
  exports: [CrudReactive],
})
export class CrudReactiveFormModule {}
