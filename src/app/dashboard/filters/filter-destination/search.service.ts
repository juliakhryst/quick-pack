import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

export interface City {
  name: string;
  country: string;
  lat: string;
  lng: string;
}

const SUGGESTIONS_QTY_RANGE = [0, 5];

@Injectable()
export class SearchService {

    constructor (private afs: AngularFirestore) { }

    searchCity(name: string): Observable<City[]> {
      return this.formatRequest(name).pipe(
        map((cities: City[]) => cities.slice(...SUGGESTIONS_QTY_RANGE)),
      );
    }

    /*
     * @private
     * @param {string} name
     * @returns {Observable<City[]>}
     * @memberof SearchService
     */

    private formatRequest(name: string): Observable<City[]> {
      return this.afs.collection<City>('destination', ref => ref.orderBy('name').startAt(name)).valueChanges();
    }
}
