import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from './filter-destination.component';

@Injectable()
export class SearchService {

    constructor (private http: HttpClient) { }

    searchCity(term: string): Observable<City[]> {
        term = term.trim();

        const options = term ?
            { params: new HttpParams().set('name', term) } : {};

        return this.http.get<City[]>('./countries.json', options);
    }
}
