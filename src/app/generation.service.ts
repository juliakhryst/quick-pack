import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, forkJoin } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenerationService {
  items$: Observable<any>;
  essential$: Observable<any>;
  filteredItems$: Observable<any>;
  respons;

  constructor(private afs: AngularFirestore) {
  }

  getList(weather, type, activities) {
    this.essential$ = this.afs.collection('pack-items', ref => ref.where('activities', '==', 'Essential')).valueChanges();

    if (activities === { baby: true, pet: true, sport: true }) {
    return this.items$ = this.afs.collection('pack-items', ref => ref.where('weather', 'array-contains', weather)
    .where('type', '==', type)).valueChanges();
    } else if (activities === { baby: false, pet: false, sport: false }) {
      this.items$ = this.essential$;
      return this.items$;
    } else {
      this.filteredItems$ = this.afs.collection('pack-items', ref => ref.where('weather', 'array-contains', 'average'/*weather*/)
      .where('type', '==', type)/*.where('activities', '==', activities)*/).valueChanges();

      this.items$ =  forkJoin(
        this.essential$,
        this.filteredItems$,
      ).pipe(map((resp1, resp2) => this.respons));

      // const subscribe = this.items$.subscribe(val => console.log(val));

      return this.items$;
    }
  }

}
