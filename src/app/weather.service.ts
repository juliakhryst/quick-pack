import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class WeatherService {

  readonly ROOT_URL = 'https://api.darksky.net/forecast/6c2092633e864891808d080ca5675d1d/[latitude],[longitude],[time]';

  constructor(private http: HttpClient) { }

  getWeather(lat: number, lng: number, time: number): Observable<any> {
    let params = new HttpParams();
    params = params.set('lat', lat.toString() );
    params = params.set('lng', lng.toString() );
    params = params.set('time', time.toString() );

    return this.http.get(this.ROOT_URL, { params })
  }


}