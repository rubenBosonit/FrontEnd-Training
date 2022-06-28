import { Component } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'parent-component',
  templateUrl: './parent.component.html',
})
export default class ParentComponent {
  parentMessage: string = '';
  childMessage: string = '';

  constructor(private communicationSercice: CommunicationService) {}

  inputEventClicked() {
    this.parentMessage = 'PARENT USING INPUT PROPERTY';
  }

  outputEventClicked(name: string) {
    this.childMessage = name;
  }

  serviceChange() {
    this.communicationSercice.parentUsedService();
    this.parentMessage = this.communicationSercice.childMessage;
  }

  parentUsingSubject() {
    this.communicationSercice.parentUsedObservable();
    this.parentMessage = this.communicationSercice.childMessage;
  }
}
