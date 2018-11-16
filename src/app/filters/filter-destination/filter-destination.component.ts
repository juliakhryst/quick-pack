import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';
import { SearchService } from './search.service';

export interface City {
  country: string;
  name: string;
  lat: string;
  lng: string;
}

@Component({
  selector: 'qpac-filter-destination',
  templateUrl: './filter-destination.component.html',
  styleUrls: ['./filter-destination.component.scss']
})
export class FilterDestinationComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  searchCity: FormControl;
  minLength = 3;
  filteredCity: Observable<City[]>;

  ngOnInit() {
    this.searchCity = new FormControl();
    this.searchCity.valueChanges
      .pipe(
        startWith(this.minLength),
        debounceTime(200),
    ).subscribe(val => this.filteredCity = this.filterCity(val));
  }

  filterCity(val: string) {
    const filterValue = val.toLowerCase();

// return this.searchService.filter(option => option.toLowerCase().indexOf(filterValue) === 0);


    return this.searchService.searchCity(filterValue);
  }

  displayFn(val?: City): string | undefined {
    return val ? val.name : undefined;
  }
}
