import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { childMessenger, parentMessenger } from '../parent/comun';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
})
export default class ChildComponent {
  @Input() parentMessage: string = '';
  @Output() onChildMessage: EventEmitter<string> = new EventEmitter();

  constructor(public communicationService: CommunicationService) {
    this.communicationService.childClass = this;
    parentMessenger.subscribe((message) => {
      this.parentMessage = message + '';
    });
  }

  eventClicked() {
    this.onChildMessage.emit('CHILD USING OUTPUT EVENT');
  }

  serviceChange() {
    this.communicationService.parentClass.childMessage = 'CHILD USING SERVICE';
    // this.communicationService.parentText = 'CHILD USING SERVICE';
  }

  childUsingSubject() {
    childMessenger.next('CHILD USING SUBJECT');
  }
}
