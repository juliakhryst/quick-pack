import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/dashboard/weather.service';
import { DataSharingService } from 'src/app/core/services/data-sharing.service';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'qpac-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit {
  response: any;
  filterObj;

  constructor(private weather: WeatherService, public data: DataSharingService) { }

  ngOnInit() {
    this.filterObj = this.data.objWithFilters;
    console.log(this.filterObj);
    this.response = this.weather.getWeather(this.filterObj.duration, this.filterObj.destination).pipe(take(1), map(data => [data]));
  }

}
