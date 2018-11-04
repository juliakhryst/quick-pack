import { FilterDurationComponent } from './../filters/filter-duration/filter-duration.component';
import { WeatherService } from './../weather.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Duration } from 'moment';

@Component({
  selector: 'app-weather-api',
  templateUrl: './weather-api.component.html',
  styleUrls: ['./weather-api.component.scss']
})
export class WeatherAPIComponent implements OnInit {
  response: any;


  constructor(private weather: WeatherService, public duration: FilterDurationComponent) {
  }

  ngOnInit() {
    this.weather.time = this.duration.getDuration(this.duration.from);
      console.log(this.weather.time);
      this.weather.getWeather().subscribe(
        response => {this.response = response;
          this.response = Array.of(this.response);
        },
        error => console.log(error)
      );
  }

  // showWeather() {
  //   this.weather.time = this.duration.getDuration(this.duration.from);
  //   console.log(this.weather.time);
  //   this.weather.getWeather().subscribe(
  //     response => {this.response = response;
  //       this.response = Array.of(this.response);
  //     },
  //     error => console.log(error)
  //   );
  // }

  weatherConclusions() {
    let overallTemperature;
    for (const attr of this.response) {
      if (attr.currently.temperature <= -10) {
        overallTemperature = 'Very cold';
     } else if (attr.currently.temperature > -10 && attr.currently.temperature <= 5) {
        overallTemperature = 'Cold';
     } else if (attr.currently.temperature > 5 && attr.currently.temperature <= 20) {
        overallTemperature = 'Average';
     } else if (attr.currently.temperature > 20) {
        overallTemperature = 'Warm';
     }
    }

    return overallTemperature;
  }

}
