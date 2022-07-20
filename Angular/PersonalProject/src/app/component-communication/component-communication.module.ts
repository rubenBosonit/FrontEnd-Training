import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import ChildComponent from './child/child.component';
import ParentComponent from './parent/parent.component';
import { ComponentCommunication } from './component-communication.component';

@NgModule({
  declarations: [ComponentCommunication, ChildComponent, ParentComponent],
  imports: [MatButtonModule],
  providers: [],
})
export class ComponentCommunicationModule {}
