import { Component, OnInit } from '@angular/core';
import { colorSelected, switcher } from './common';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss'],
})
export class ControllerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  colors: string[] = ['Red', 'Yellow', 'Green'];

  selectedValue: string = this.colors[0];
  checked: boolean = false;

  colorChanged() {
    colorSelected.next(this.selectedValue);
  }

  switchMode() {
    this.checked = !this.checked;
    switcher.next(this.checked);
  }
}
