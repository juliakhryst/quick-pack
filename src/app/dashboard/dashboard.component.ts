import { GenerationService } from './../generation.service';
import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { tap } from 'rxjs/operators';
import { Item } from '../core/interfaces/item';
import { Observable } from 'rxjs';

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
  constructor(private afs: AngularFirestore, private weather: WeatherService, private generation: GenerationService) {
   }
  changedSelectedType(type) {
    this.typeOfTrip = type;
  }
  changedTypeOfGender(type) {
    this.typeOfGender = type;
  }

  generate(weather, type, activities): void {
    this.items$ = this.generation.getListByParams(weather, type, activities).pipe(
      tap(console.log)
    );
  }

  ngOnInit() {
  }

  changedDepartureDate(res) {
    this.fromDate = res.from;
    this.weather.getWeather(res.from, res.lang).subscribe(
      response => {this.response = [response];
        console.log(this.response);
      },
      error => console.log(error)
    );
  }

}
