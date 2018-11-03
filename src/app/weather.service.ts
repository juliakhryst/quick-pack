import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class WeatherService {

  // ROOT_URL = 'https://api.darksky.net/forecast/6c2092633e864891808d080ca5675d1d/52.520008,13.404954,2018-12-22T12:20:02+00:00?units=si';

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    const weatherResponse = this.http.get(this.ROOT_URL);

    return weatherResponse.pipe(map(res => res));

  }


}
