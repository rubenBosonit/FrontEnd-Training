import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CrudTemplate } from './crud-template.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [CrudTemplate, FormComponent, TableComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports: [CrudTemplate],
})
export class CrudTemplateModule {}
