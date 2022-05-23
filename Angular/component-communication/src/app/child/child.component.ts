import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
})
export default class ChildComponent {
  @Input() parentMessage: string = '';
  @Output() onChildMessage: EventEmitter<string> = new EventEmitter();

  eventClicked() {
    this.onChildMessage.emit('CHILD USING OUTPUT EVENT');
  }
}
