import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
})
export default class ChildComponent {
  @Input() parentMessage: string = '';
  @Output() onChildMessage: EventEmitter<string> = new EventEmitter();

  constructor(private communicationService: CommunicationService) {}

  eventClicked() {
    this.onChildMessage.emit('CHILD USING OUTPUT EVENT');
  }

  serviceChange() {
    this.communicationService.childUsedService();
    this.onChildMessage.emit(this.communicationService.parentMessage);
  }

  childUsingSubject() {
    this.communicationService.childUsedObservable();
    this.onChildMessage.emit(this.communicationService.parentMessage);
  }
}
