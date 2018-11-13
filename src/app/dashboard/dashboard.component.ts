import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'qpac-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  item$: Observable<any>;
  response: Object;
  fromDate: string;


  constructor(private afs: AngularFirestore, private weather: WeatherService) { }

  ngOnInit() {
    this.item$ = this.afs.collection('pack-items', ref => ref.where('category', '==', 'Clothing')).valueChanges();
  }

  changedDepartureDate(res) {
    this.fromDate = res.from;
    this.weather.getWeather(res.from, res.lang).subscribe(
      response => {this.response = response;
        this.response = Array.of(this.response);

        console.log(this.response);
      },
      error => console.log(error)
    );
  }

  showFrom() {
    console.log(this.fromDate);
  }

}
