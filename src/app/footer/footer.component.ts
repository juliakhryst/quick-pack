import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  response: any;

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    this.weather.getWeather().subscribe(
      response => {this.response = response;
        this.response = Array.of(this.response);
      },
      error => console.log(error)
    );
  }

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
