import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {City} from './city';

@Injectable()
export class CitiesService {

    constructor (private http: HttpClient) { }

    search(term: string): Observable<City[]> {
        term = term.trim();

        const options = term ?
         { params: new HttpParams().set('name', term) } : {};

        return this.http.get<City[]>('./filters/filter-destination/cities.json', options);
    }
}
