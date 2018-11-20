import { WeatherService } from './dashboard/weather.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, forkJoin } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, take, switchMap } from 'rxjs/operators';
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

  getWeatherStringValue(filterObj): Observable<string> {
    return this.weather.getWeather(filterObj.duration, filterObj.destination).pipe(
      map( (data) => {
        if ( data.currently.temperature <= 4 ) {

          return 'cold';
        } else if ( data.currently.temperature > 0 && data.currently.temperature <= 17 ) {

          return 'average';
        } else {

          return 'warm';
        }
      })
    );
  }

  private getActivitiesRequests(weather, type, activities): Observable<Item[]>[] {

    return Object.keys(activities)
            .filter(activity => activities[activity])
            .map(activity => this.getItemsByParams(weather, type, activity));
  }

  private extractRequests(requests) {

    return requests.map(collection => collection.pipe(take(1)));
  }

  getListByParams(filterObj) {

    return this.getWeatherStringValue(filterObj).pipe(
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

}
