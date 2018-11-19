import { GenerationService } from './../generation.service';
import { WeatherService } from './weather.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { tap } from 'rxjs/operators';
import { Item } from '../core/interfaces/item';
import { Observable } from 'rxjs';
import { ActivityFilter } from './filters/filter-activities/filter-activities.component';

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

  constructor(private afs: AngularFirestore, private weather: WeatherService, private generation: GenerationService) {
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
  }

  ngOnInit() {}

  handleFilter(filter) {
    console.log(filter);
    this.filterObj = Object.assign({}, this.filterObj, filter);
    console.log(this.filterObj);
  }


  showWeather(durObj) {
    this.weather.getWeather(durObj).subscribe(
      response => [this.response],
      error => console.log(error)
    );

    this.weather.weatherTransformation(this.response);
    console.log(this.weather.weatherTransformation(this.response));
  }
}
