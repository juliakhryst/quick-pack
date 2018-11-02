import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class WeatherService {

  ROOT_URL = 'https://api.darksky.net/forecast/6c2092633e864891808d080ca5675d1d/52.520008,13.404954';

  constructor(private http: HttpClient) { }

  getWeather () {

    return this.http.get(this.ROOT_URL).subscribe(data => {
      console.log('We have', data);
    });
  }


}
