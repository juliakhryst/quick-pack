import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireModule } from "angularfire2";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { ServiceWorkerModule } from "@angular/service-worker";
import { FormsModule } from "@angular/forms";

import { MaterialModule } from "./material/material.module";
import { CoreModule } from "./core/core.module";
import { FilterDurationComponent } from './filters/filter-duration/filter-duration.component';



import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FooterComponent } from './footer/footer.component';
import { TranslationComponent } from './translation/translation.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TranslationComponent,
    FilterDurationComponent
  ],
  
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
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
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
