import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { switchMap, debounceTime, tap, finalize, filter, catchError } from 'rxjs/operators';
import { SearchService, City } from './search.service';

@Component({
  selector: 'qpac-filter-destination',
  templateUrl: './filter-destination.component.html',
  styleUrls: ['./filter-destination.component.scss']
})
export class FilterDestinationComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  searchCity = new FormControl();
  minLength = 3;
  isLoading = false;
  suggestedCities: City[] = [];
  city: City;

  @Output() changedCity = new EventEmitter<City>();

  ngOnInit() {

    this.searchCity.valueChanges.pipe(
      debounceTime(200),
      filter(query => query && query.length >= this.minLength),
      tap(() => this.isLoading = true),
      switchMap(value => this.searchService.searchCity(value).pipe(
        tap(city => this.suggestedCities = city),
        tap(() => this.isLoading = false),
        catchError(err => throwError(new Error('No such city')))
      ))
    ).subscribe();
  }

  displayFn(val: City) {
    return val ? val.name : undefined;
  }

  cityChange(city) {
    this.changedCity.emit(this.city = city);
  }
}
