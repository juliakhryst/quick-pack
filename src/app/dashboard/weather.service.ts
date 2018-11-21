import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class WeatherService {
  domain = 'https://api.darksky.net/';
  url;

  constructor(private http: HttpClient) {}

  getWeather(dur, dest): Observable<any> {
    const weatherResponse = this.http.get(`${environment.serverUrl}/weather?lat=${dest.lat}&lng=${dest.lng}&t=${dur.from}&l=${dur.lang}`);

    return weatherResponse.pipe(map(res => res));
  }

}
