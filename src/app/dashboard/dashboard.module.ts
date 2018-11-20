import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { FilterTypeComponent } from './filters/filter-type/filter-type.component';
import { FilterGenderComponent } from './filters/filter-gender/filter-gender.component';
import { FilterDurationComponent } from './filters/filter-duration/filter-duration.component';
import { WeatherService } from './weather.service';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FilterActivitiesComponent } from './filters/filter-activities/filter-activities.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GeneratedListComponent } from '../generated-list/generated-list.component';
import { PackItemComponent } from '../pack-item/pack-item.component';
import { GenerationService } from '../core/services/generation.service';
import { LocalStorageService } from '../core/services/local-storage.service';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    FormsModule,
    MaterialModule,
    CoreModule
  ],
  declarations: [
    FilterDurationComponent,
    FilterTypeComponent,
    FilterGenderComponent,
    WeatherDisplayComponent,
    DashboardComponent,
    FilterActivitiesComponent,
    GeneratedListComponent,
    PackItemComponent
  ],
  providers: [WeatherService, GenerationService, LocalStorageService],
})
export class DashboardModule { }
