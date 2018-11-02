import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  records = {};

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    this.records = this.weather.getWeather();
  }

}
