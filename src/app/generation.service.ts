import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerationService {
  item$: Observable<any>;

  constructor(private afs: AngularFirestore) {
  }

  getList(weather, type, activities) {
    if (activities === { baby: true, pet: true, sport: true }) {
    return this.item$ = this.afs.collection('list-items', ref => ref.where('weather', 'array-contains', weather)
    .where('type', '==', type)).valueChanges();
    } else if (activities === { baby: false, pet: false, sport: false }) {
      return this.item$ = this.afs.collection('list-items', ref => ref.where('activities', '==', 'Essential')).valueChanges();
    } else {
      return this.item$ = this.afs.collection('list-items', ref => ref.where('weather', 'array-contains', 'cold'/*weather*/)
      .where('type', '==', type)/*.where('activities', '==', activities)*/).valueChanges();
    }
  }

}
