import { WeatherService } from './dashboard/weather.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, forkJoin, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, tap, take, switchMap } from 'rxjs/operators';
import { Item } from './core/interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class GenerationService {

  response;

  constructor(private afs: AngularFirestore,
    public weather: WeatherService) {
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

  getWeather(filterObj): Observable<string> {
    return this.weather.getWeather(filterObj.duration).pipe(
      map( (data) => {
        if ( data.currently.temperature <= 4 ) {
          console.log('cold');
          return 'cold';
        } else if ( data.currently.temperature > 0 && data.currently.temperature <= 17 ) {
          console.log('average');
          return 'average';
        } else {
          console.log('warm');
          return 'warm';
        }
      })
    );
  }


  getListByParams(filterObj) {

     return this.getWeather(filterObj).pipe(
      take(1),
      switchMap((weather) => {
        const activitiesRequests = this.getActivitiesRequests(weather, filterObj.type, filterObj.activities);
        return forkJoin([
          this.getEssentials().pipe(take(1)),
        ...this.extractRequests(activitiesRequests),
        ]);
      }),
    );

  }

  private getActivitiesRequests(weather, type, activities): Observable<Item[]>[] {
    console.log(weather);
    return Object.keys(activities)
            .filter(activity => activities[activity])
            .map(activity => this.getItemsByParams(weather, type, activity));
  }

  private extractRequests(requests) {
    return requests.map(collection => collection.pipe(take(1)));
  }
}
