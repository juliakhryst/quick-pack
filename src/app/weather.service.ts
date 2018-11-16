import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class WeatherService {
  domain = 'https://api.darksky.net/';
  url;

  constructor(private http: HttpClient) {}

  // t= time, l = language;
  getWeather(t, l): Observable<any> {
    // this.url = this.domain + 'forecast/6c2092633e864891808d080ca5675d1d/52.520008,13.404954,' + t + 'T12:00:00+02:00?units=si&lang=' + l;
    const weatherResponse = this.http.get(`http://localhost:8080/weather?t=${t}&l=${l}`);

    return weatherResponse.pipe(map(res => res));
  }


}
