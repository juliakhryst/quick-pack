import { WeatherService } from './weather.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { FooterComponent } from './footer/footer.component';
import { FilterDurationComponent } from './filters/filter-duration/filter-duration.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LanguageSwitcherComponent, WeatherService, FilterDurationComponent]
})
export class AppComponent {
  public items$: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items$ = db.collection('/pack-items-categories').valueChanges();

  }
}
