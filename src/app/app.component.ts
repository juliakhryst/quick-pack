import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LanguageSwitcherComponent]
})
export class AppComponent {
  public items$: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items$ = db.collection('/pack-items-categories').valueChanges();

  }
}
