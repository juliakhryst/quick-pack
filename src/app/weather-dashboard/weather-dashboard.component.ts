import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'qpac-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss']
})
export class WeatherDashboardComponent implements OnInit {
  response: Object;

  constructor(private weather: WeatherService) { }

  ngOnInit() {
  }

  changedDepartureDate(res) {
    this.weather.getWeather(res.from, res.lang).subscribe(
      response => {this.response = response;
        this.response = Array.of(this.response);

        console.log(this.response);
      },
      error => console.log(error)
    );
  }

}
