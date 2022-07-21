import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';
import { colorSelected, switcher } from '../controller/common';
@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.scss'],
})
export class TrafficLightComponent implements OnInit {
  selectedValue = 'Red';
  state: boolean = false;

  constructor() {}

  ngOnInit(): void {
    colorSelected.pipe(debounceTime(300)).subscribe((selectedValue) => {
      this.selectedValue = selectedValue;
    });
    switcher.subscribe((state) => (this.state = state));
  }
}
