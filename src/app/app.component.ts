import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'qpac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items$: Observable<any[]>;

  constructor (
    db: AngularFirestore,
    private auth: AuthService
  ) {
    // this.items$ = db.collection('/pack-items-categories').valueChanges();
  }

}

