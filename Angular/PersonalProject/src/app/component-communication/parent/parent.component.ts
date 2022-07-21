import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { childMessenger, parentMessenger } from './common';

@Component({
  selector: 'parent-component',
  templateUrl: './parent.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./parent.component.scss'],
})
export default class ParentComponent {
  parentMessage: String = new String('');
  childMessage: string = '';

  constructor(
    public communicationService: CommunicationService,
    private cdRef: ChangeDetectorRef
  ) {
    this.communicationService.parentClass = this;
    childMessenger.subscribe((message) => {
      this.childMessage = message + '';
    });
  }

  inputEventClicked() {
    this.parentMessage = new String('PARENT USING INPUT PROPERTY');
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
