import { WeatherService } from './../../weather.service';
import { Input, Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-filter-duration',
  templateUrl: './filter-duration.component.html',
  styleUrls: ['./filter-duration.component.scss']
})
export class FilterDurationComponent implements OnInit {

  response: any;

  @Input() from: any;
  to: string;
  minDate = new Date();

  public getDuration(from) {
    return (moment(from).format('YYYY[-]MM[-]DD'));
  }

  showWeather() {
    this.weather.time = this.getDuration(this.from);
    console.log(this.weather.time);

    this.weather.getWeather().subscribe(
      response => {this.response = response;
        this.response = Array.of(this.response);
      },
      error => console.log(error)
    );

    console.log(this.weather.url);
    console.log(this.response);
  }

  constructor(private weather: WeatherService) {
  }

  ngOnInit() {
  }

}
