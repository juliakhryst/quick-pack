import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {map, tap, debounceTime} from 'rxjs/operators';
import { Observable } from 'rxjs';


export class City {
    constructor(public name: string, public country: string, public lat: string, public lng: string) {}
}

export interface CityResponse {
    total: number;
    results: City[];
}

@Injectable()
export class SearchService {

    constructor (private http: HttpClient) { }

    searchCity(name: string): Observable<CityResponse> {
        return this.http.get<CityResponse>('./assets/countries.json')
        .pipe(
          tap((response: CityResponse) => {
            response.results = response.results
              .map(city => new City(city.name, city.country, city.lat, city.lng))
              .filter(city => city.name.includes(name));

            return response;
          })
        );
      }
    // searchCity(term) {
    //     let listOfCities = this.http.get<City[]>('./assets/countries.json')
    //     .pipe(
    //         debounceTime(500),  // WAIT FOR 500 MILISECONDS ATER EACH KEY STROKE.
    //         map(
    //             (data: any) => {
    //                 return (
    //                     data.length !== 0 ? data as City[] : [{"City": "No such city"} as any]
    //                 );
    //             }
    //     ));

    //     return listOfCities;
    // }
        // searchCity(term: string): Observable<City[]> {
        //     term = term.trim();

        //     const options = term ?
        //         { params: new HttpParams().set('name': term) } : {};

        //     return this.http.get<City[]>('./assets/countries.json', options)
        //     .pipe(

        //     );
        // }
}
