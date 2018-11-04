import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CitiesService} from './cities.service';
import {City} from './city';

@Component({
  selector: 'app-qpac-filter-destination',
  templateUrl: './filter-destination.component.html',
  styleUrls: ['./filter-destination.component.scss'],
  providers: [CitiesService]
})
export class FilterDestinationComponent implements OnInit {

  searchCity: FormControl;
  minLength = 3;
  city: City[];

  filteredCity: Observable<City[]>;

  constructor(private service: CitiesService) { }

  ngOnInit() {
    this.searchCity = new FormControl();
    this.filteredCity = this.searchCity.valueChanges
      .pipe(
        startWith(this.minLength),
        map(val => this.displayFn(val)),
        map(name => this.filterCity(name)['name'])
      );
  }

  displayFn(val: any): string {
    return val && typeof val === 'object' ? val.name : val;
  }

  filterCity(val: string) {
    return val ? this._filter(val) : this.city;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.service.search(value)['name'].filter(option => option['name'].toLowerCase().indexOf(filterValue) === 0);
  }
}
