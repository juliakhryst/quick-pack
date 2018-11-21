import { GeneratedListWrapperComponent } from './../generated-list-wrapper/generated-list-wrapper.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from './../core/core.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FilterDestinationComponent } from './filters/filter-destination/filter-destination.component';
import { SearchService } from './filters/filter-destination/search.service';
import { GeneratedListComponent } from '../generated-list-wrapper/generated-list/generated-list.component';
import { PackItemComponent } from '../generated-list-wrapper/pack-item/pack-item.component';
import { ListTitleComponent } from '../generated-list-wrapper/list-title/list-title.component';

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
    ReactiveFormsModule,
    MaterialModule,
    CoreModule
  ],
  declarations: [
    FilterDurationComponent,
    FilterTypeComponent,
    FilterGenderComponent,
    WeatherDisplayComponent,
    DashboardComponent,
    GeneratedListComponent,
    FilterActivitiesComponent,
    FilterDestinationComponent,
    PackItemComponent,
    GeneratedListWrapperComponent,
    ListTitleComponent
  ],
  providers: [WeatherService, SearchService],
})
export class DashboardModule { }
