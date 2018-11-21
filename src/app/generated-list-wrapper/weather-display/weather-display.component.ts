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
  weatherIcon;

  constructor(private weather: WeatherService, public data: DataSharingService) { }

  ngOnInit() {
    this.filterObj = this.data.objWithFilters;
    this.weatherIcon = this.weather.getWeather(this.filterObj.duration, this.filterObj.destination).pipe(
      map( (data) => {
        switch (data.currently.icon) {
          case 'rain': return 'rain';

          case 'snow': return 'snow';

          case 'cloudy': return 'cloudly';

          case 'clear-day': return 'sun';

          default: return 'average';
        }
      })
    );

    this.response = this.weather.getWeather(this.filterObj.duration, this.filterObj.destination).pipe(take(1), map(data => [data]));
  }

}
