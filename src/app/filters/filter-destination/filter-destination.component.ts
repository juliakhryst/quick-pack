import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, debounceTime, tap, finalize, startWith } from 'rxjs/operators';
import { SearchService, City, CityResponse } from './search.service';

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
  // filteredCity: Observable<CityResponse>;
  filteredCity: City[] = [];

  ngOnInit() {
    // this.searchCity.valueChanges.subscribe(
    //   term => {
    //     if (term !== '') {
    //       this.searchService.searchCity(term).subscribe(
    //         data => {
    //           this.filteredCity = data as City[];
    //       })
    //     }
    // })
    this.searchCity.valueChanges
      .pipe(
        startWith(this.minLength),
        debounceTime(200),
        tap(() => this.isLoading = true),
        switchMap(value => this.searchService.searchCity(value)
        .pipe(
          finalize(() => this.isLoading = false),
          )
        )
      )
      .subscribe(city => this.filteredCity = city.results);
  }

  displayFn(val: City) {
    return val ? val.name : undefined;
  }
}
