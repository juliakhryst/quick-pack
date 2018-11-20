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
      return this.afs.collection<City>(`destination`, ref => {
        return ref.orderBy('name')
                  .startAt(name)
                  .endAt(name + '\uf8ff')
                  .limit(5);
      }).valueChanges();
    }
}
