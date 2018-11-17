import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { FilterDurationComponent } from './filters/filter-duration/filter-duration.component';
import { FilterDestinationComponent } from './filters/filter-destination/filter-destination.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { FilterTypeComponent } from './filters/filter-type/filter-type.component';
import { FilterGenderComponent } from './filters/filter-gender/filter-gender.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { WeatherService } from './weather.service';
import { SearchService } from './filters/filter-destination/search.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LanguageSwitcherComponent,
    FilterDurationComponent,
    FilterDestinationComponent,
    FilterTypeComponent,
    FilterGenderComponent,
    AuthComponent,
    HeaderComponent,
    DashboardComponent,
    WeatherDashboardComponent,
    WeatherDisplayComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CoreModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [WeatherService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {}
