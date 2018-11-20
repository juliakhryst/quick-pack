import { GenerationService } from '../core/services/generation.service';
import { WeatherService } from './weather.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { tap } from 'rxjs/operators';
import { Item } from '../core/interfaces/item';
import { Observable } from 'rxjs';
import { ActivityFilter } from './filters/filter-activities/filter-activities.component';
import { Router } from '@angular/router';
import { LocalStorageService } from '../core/services/local-storage.service';

export interface Filters {
  activities?: ActivityFilter;
  duration?: any;
}

@Component({
  selector: 'qpac-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  items$: Observable<Item[]>;
  response: Object;
  weatherParams = 'cold';
  activitiesParams = { Baby: false, Pet: false, Sport: true};
  fromDate: string;
  typeOfTrip: string;
  typeOfGender: string;
  filterObj: Filters;

  constructor(private afs: AngularFirestore,
     private weather: WeatherService,
     private generation: GenerationService,
     private router: Router,
     localStorage: LocalStorageService
    ) {
   }
  changedSelectedType(type) {
    this.typeOfTrip = type;
  }
  changedTypeOfGender(type) {
    this.typeOfGender = type;
  }


  generate(filterObj): void {
    this.items$ = this.generation.getListByParams(filterObj).pipe(
      tap(console.log)
    );

    // this.router.navigate(['/dashboard/generated-list']);
  }

  ngOnInit() {}

  handleFilter(filter) {
    console.log(filter);
    this.filterObj = Object.assign({}, this.filterObj, filter);
    console.log(this.filterObj);
  }


  changedDepartureDate(durObj) {
    this.weather.getWeather(durObj).subscribe(
      response => {this.response = response;
        this.response = Array.of(this.response);

        console.log(this.response);
      },
      error => console.log(error)
    );
  }
}
