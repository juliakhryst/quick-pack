import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { TranslateService } from '@ngx-translate/core';
import { TranslationComponent } from './translation/translation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TranslationComponent]
})
export class AppComponent {
  public items$: Observable<any[]>;
  //param = { value: 'world' };

  constructor(db: AngularFirestore) {
    this.items$ = db.collection('/pack-items-categories').valueChanges();

  }
}
