import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouterModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChooseExercise } from './choose-exercise/choose-exercise.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CrudTemplateModule } from './crud-template-form/crud-template.module';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [AppComponent, ChooseExercise, SidenavComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    MaterialModule,
    CrudTemplateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
