import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, forkJoin, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, tap, take } from 'rxjs/operators';
import { Item } from './core/interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class GenerationService {
  constructor(private afs: AngularFirestore) {
  }

  getEssentials(): Observable<Item[]> {
    return this.afs.collection<Item>('pack-items', ref => ref.where('activities', '==', 'Essential')).valueChanges();
  }

  getItemsByParams(weather, type, activity): Observable<Item[]> {
    return this.afs.collection<Item>('pack-items', ref => {
      return ref.where('weather', 'array-contains', weather)
                .where('type', '==', type)
                .where('activities', '==', activity);
      }).valueChanges();
  }

  getListByParams(weather, type, activities) {
    const activitiesRequests = this.getActivitiesRequests(weather, type, activities);

    return forkJoin([
      this.getEssentials().pipe(take(1)),
      ...this.extractRequests(activitiesRequests),
    ]);
  }

  private getActivitiesRequests(weather, type, activities): Observable<Item[]>[] {
    return Object.keys(activities)
            .filter(activity => activities[activity])
            .map(activity => this.getItemsByParams(weather, type, activity));
  }

  private extractRequests(requests: Observable<Item[]>[]): Observable<Item[]>[] {
    return requests.map(collection => collection.pipe(take(1)));
  }
}
