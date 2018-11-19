import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class WeatherService {
  domain = 'https://api.darksky.net/';
  url;

  constructor(private http: HttpClient) {}

  // durObj = duration
  getWeather(durObj): Observable<any> {
    // this.url = this.domain + 'forecast/6c2092633e864891808d080ca5675d1d/52.520008,13.404954,' + t + 'T12:00:00+02:00?units=si&lang=' + l;
    const weatherResponse = this.http.get(`${environment.serverUrl}/weather?t=${durObj.from}&l=${durObj.lang}`);
    console.log(weatherResponse);

    return weatherResponse.pipe(map(res => res));
  }

  weatherTransformation(response) {
     for (const weather of response) {
      if ( response.currently.temperature <= 0 ) {
        console.log('cold');
        return 'cold';
      } else if ( response.currently.temperature > 0 && response.currently.temperature <= 16 ) {
        console.log('average');
        return 'average';
      } else {
        console.log('warm');
        return 'warm';
      }
    }
  }


}
