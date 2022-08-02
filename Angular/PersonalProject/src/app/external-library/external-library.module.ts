import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ExternalLibrary } from './external-library.component';
import { PolarAreaChartComponent } from './components/polar-area-chart/polar-area-chart.component';

@NgModule({
  declarations: [BarChartComponent, ExternalLibrary, PolarAreaChartComponent],
  imports: [CommonModule, ChartModule, HttpClientModule],
})
export class ExternalLibraryModule {}
