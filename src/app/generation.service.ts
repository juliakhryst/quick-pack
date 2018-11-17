import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerationService {
  items$: Observable<any>;
  essential$: Observable<any>;
  filteredItems$: Observable<any>;
  prop1;
  prop2;

  constructor(private afs: AngularFirestore) {
  }

  getList(weather, type, activities) {
    this.essential$ = this.afs.collection('list-items', ref => ref.where('activities', '==', 'Essential')).valueChanges();

    if (activities === { baby: true, pet: true, sport: true }) {
    return this.items$ = this.afs.collection('list-items', ref => ref.where('weather', 'array-contains', weather)
    .where('type', '==', type)).valueChanges();
    } else if (activities === { baby: false, pet: false, sport: false }) {
      this.items$ = this.essential$;
      return this.items$;
    } else {
      this.filteredItems$ = this.afs.collection('list-items', ref => ref.where('weather', 'array-contains', 'average'/*weather*/)
      .where('type', '==', type)/*.where('activities', '==', activities)*/).valueChanges();
      this.items$ = this.filteredItems$;

      return this.items$;
    }
  }

}
