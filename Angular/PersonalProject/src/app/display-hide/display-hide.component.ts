import { Component } from '@angular/core';
@Component({
  selector: 'app-display-hide',
  templateUrl: './display-hide.component.html',
  styleUrls: [`./display-hide.component.scss`],
})
export class DisplayHide {
  appear: boolean = false;

  show() {
    this.appear = !this.appear;
  }
}
