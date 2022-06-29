import { ChangeDetectorRef, Component } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { childMessenger, parentMessenger } from './comun';

@Component({
  selector: 'parent-component',
  templateUrl: './parent.component.html',
})
export default class ParentComponent {
  parentMessage: string = '';
  childMessage: string = '';

  constructor(public communicationService: CommunicationService) {
    this.communicationService.parentClass = this;
    childMessenger.subscribe((message) => {
      this.childMessage = message + '';
    });
  }

  inputEventClicked() {
    this.parentMessage = 'PARENT USING INPUT PROPERTY';
  }

  outputEventClicked(name: string) {
    this.childMessage = name;
  }

  serviceChange() {
    this.communicationService.childClass.parentMessage = 'PARENT USING SERVICE';
    // this.communicationService.childText = 'PARENT USING SERVICE';
  }

  parentUsingSubject() {
    parentMessenger.next('PARENT USING SUBJECT');
  }
}
