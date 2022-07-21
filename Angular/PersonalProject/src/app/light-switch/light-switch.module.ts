import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ControllerComponent } from './controller/controller.component';
import { LightSwitch } from './light-switch.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';

@NgModule({
  imports: [CommonModule, FormsModule, MatCheckboxModule, MatSelectModule],
  declarations: [LightSwitch, TrafficLightComponent, ControllerComponent],
  exports: [LightSwitch],
})
export class LightSwitchModule {}
