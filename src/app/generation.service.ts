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

  public esent = [];

  constructor(private afs: AngularFirestore) {
  }

  // get list for no activities(all essentials), ignore weather and type
  getEssentials() {
    const essential = this.afs.collection('pack-items', ref => ref.where('activities', '==', 'Essential')).valueChanges().subscribe(res => this.esent.push(res));
    console.log(essential);

    return essential;
  }

  // get list for selected activity(only for 1 activity per request)
  getItemsByActivity(activity) {
    return this.afs.collection('pack-items', ref => ref.where('activities', '==', activity)).valueChanges().subscribe(res => this.esent.push(res));
  }

  // get list for all activities
  getItemsByWeatherAndType(weather, type) {
    return this.afs.collection('pack-items', ref => ref.where('weather', 'array-contains', weather)
    .where('type', '==', type)).valueChanges().subscribe(res => this.esent.push(res));
  }

  getListByParams(weather, type, activities) {
    console.log('getListByParams');

    // activities = { baby: true, pet: false, sport: true};
    const activitiesRequests = Object.keys(activities)
                              .filter(activity => activities[activity])
                              .map(activity => this.getItemsByActivity(activity)
                              );

    this.getEssentials();
    this.getItemsByWeatherAndType(weather, type);
    const requests = [this.esent];
    console.log('Requests', requests);
    console.log('activitiesRequests', activitiesRequests);

    return this.esent;
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
