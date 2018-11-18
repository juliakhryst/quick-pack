import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, forkJoin, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenerationService {
  items$: Observable<any>;
  essential$: Observable<any>;
  filteredItems$: Observable<any>;
  keys;

  constructor(private afs: AngularFirestore) {
  }

  // get list for no activities(all essentials), ignore weather and type
  getEssentials() {
    return this.afs.collection('pack-items', ref => ref.where('activities', '==', 'Essential')).valueChanges();
  }

  // get list for selected activity(only for 1 activity per request)
  getItemsByActivity(activity) {
    return this.afs.collection('pack-items', ref => ref.where('activities', '==', activity)).valueChanges();
  }

  // get list for all activities
  getItemsByWeatherAndType(weather, type) {
    return this.afs.collection('pack-items', ref => ref.where('weather', 'array-contains', weather)
    .where('type', '==', type)).valueChanges();
  }

  getListByParams(weather, type, activities) {
    console.log('getListByParams');
    const activitiesRequests = Object.keys(activities)
                              .filter(activity => activities[activity])
                              .map(activity => this.getItemsByActivity(activity)
                              );


    const requests = [this.getEssentials(), this.getItemsByWeatherAndType(weather, type)];
    console.log('Requests', requests);
    console.log('activitiesRequests', activitiesRequests);

    console.log('ForkJoin', forkJoin([...requests, ...activitiesRequests]));

    // const subscribe = activitiesRequests.subscribe(val => console.log(val));

    return forkJoin(of(...requests), of(...activitiesRequests));
  }

  // getList(weather, type, activities) {
  //   this.essential$ = this.afs.collection('pack-items', ref => ref.where('activities', '==', 'Essential')).valueChanges();

  //   if (activities === { baby: true, pet: true, sport: true }) {
  //   return this.items$ = this.afs.collection('pack-items', ref => ref.where('weather', 'array-contains', weather)
  //   .where('type', '==', type)).valueChanges();
  //   } else if (activities == { baby: false, pet: false, sport: false }) {
  //     this.items$ = this.essential$;
  //     return this.items$;
  //   } else {
  //     this.filteredItems$ = this.afs.collection('pack-items', ref => ref.where('weather', 'array-contains', 'average'/*weather*/)
  //     .where('type', '==', type)/*.where('activities', '==', activities)*/).valueChanges();

  //     request;
  // getEssential();

  //     return forkJoin(
  //       this.essential$,
  //       this.filteredItems$,
  //       request
  //     );

      // const subscribe = this.items$.subscribe(val => console.log(val));

      // return this.items$;
    }
  }

}
