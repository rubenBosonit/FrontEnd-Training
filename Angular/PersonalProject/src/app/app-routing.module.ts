import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudReactive } from './crud-reactive-form/crud-reactive.component';
import { CrudTemplate } from './crud-template-form/crud-template.component';
import { DisplayHide } from './display-hide/display-hide.component';
import { ChooseExercise } from './choose-exercise/choose-exercise.component';
import { ExternalLibrary } from './external-library/external-library.component';
import { LightSwitch } from './light-switch/light-switch.component';
import { ComponentCommunication } from './component-communication/component-communication.component';

const routes: Routes = [
  {
    path: '',
    component: ChooseExercise,
  },
  {
    path: 'display-hide',
    component: DisplayHide,
  },
  {
    path: 'component-communication',
    component: ComponentCommunication,
  },
  {
    path: 'crud-template-form',
    component: CrudTemplate,
  },
  {
    path: 'crud-reactive-form',
    component: CrudReactive,
  },
  {
    path: 'external-library',
    component: ExternalLibrary,
  },
  {
    path: 'light-switch',
    component: LightSwitch,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
