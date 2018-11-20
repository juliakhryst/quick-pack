import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

export interface City {
  name: string;
  country: string;
  lat: string;
  lng: string;
}

@Injectable()
export class SearchService {

    constructor (private afs: AngularFirestore) { }

    searchCity(name: string): Observable<City[]> {
      const firstCharUpper = name.charAt(0).toUpperCase() + name.slice(1);
      return this.afs.collection<City>(`destination`, ref => {
        return ref.orderBy('name')
                  .startAt(firstCharUpper)
                  .endAt(firstCharUpper + '\uf8ff')
                  .limit(5);
      }).valueChanges();
    }
}
