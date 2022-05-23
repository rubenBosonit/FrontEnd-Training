import { Component } from '@angular/core';

@Component({
  selector: 'parent-component',
  templateUrl: './parent.component.html',
})
export default class ParentComponent {
  parentMessage: string = '';
  childMessage: string = '';

  inputEventClicked() {
    this.parentMessage = 'PARENT USING INPUT PROPERTY';
  }

  outputEventClicked(name: string) {
    this.childMessage = name;
  }
}
