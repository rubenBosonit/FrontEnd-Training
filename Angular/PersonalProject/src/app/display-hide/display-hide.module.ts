import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { DisplayHide } from './display-hide.component';

@NgModule({
  declarations: [DisplayHide],
  imports: [CommonModule, MatIconModule],
  exports: [DisplayHide],
})
export class DisplayHideModule {}
