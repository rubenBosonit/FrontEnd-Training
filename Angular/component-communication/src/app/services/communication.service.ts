import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  childMessage: string = '';
  parentMessage: string = '';

  constructor() {
    this.subjectsStartListening();
  }

  fatherNewValue: Subject<string> = new Subject();
  childNewValue: Subject<string> = new Subject();

  subjectsStartListening() {
    this.fatherNewValue.subscribe((childMessage) => {
      this.parentMessage = childMessage;
    });
    this.childNewValue.subscribe((parentMessage) => {
      this.childMessage = parentMessage;
      console.log(this.childMessage);
    });
  }

  childUsedService() {
    this.parentMessage = 'CHILD USING SERVICE';
  }
  parentUsedService() {
    this.childMessage = 'PARENT USING SERVICE';
  }

  childUsedObservable() {
    this.fatherNewValue.next('CHILD USING SUBJECT');
  }

  parentUsedObservable() {
    console.log('a');

    this.childNewValue.next('PARENT USING SUBJECT');
  }
}
