import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { FilterTypeComponent } from './filters/filter-type/filter-type.component';
import { FilterGenderComponent } from './filters/filter-gender/filter-gender.component';
import { FilterDurationComponent } from './filters/filter-duration/filter-duration.component';
import { WeatherService } from './weather.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FilterDurationComponent,
    FilterTypeComponent,
    FilterGenderComponent,
    WeatherDisplayComponent,
    DashboardComponent
  ],
  providers: [WeatherService],
})
export class DashboardModule { }
