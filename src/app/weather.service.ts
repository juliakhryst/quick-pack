import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class WeatherService {
  domain = 'https://api.darksky.net/';
  url;

  constructor(private http: HttpClient) {}

  getWeather(time): Observable<any> {
    this.url = this.domain + 'forecast/06c2092633e864891808d080ca5675d1d/52.520008,13.404954,' + time + 'T12:00:00+02:00?units=si';
    const weatherResponse = this.http.get(this.url);

    return weatherResponse.pipe(map(res => res));
  }


}
