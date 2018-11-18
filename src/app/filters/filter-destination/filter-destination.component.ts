import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { STRING_TYPE } from '@angular/compiler/src/output/output_ast';

export interface State {
  country: string;
  name: string;
  lat: string;
  lng: string;
}

/**
 * @title Autocomplete overview
 */
@Component({
  selector: 'qpac-filter-destination',
  templateUrl: './filter-destination.component.html',
  styleUrls: ['./filter-destination.component.scss']
})
export class FilterDestinationComponent {
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  minLength = 3;

  states: State[] = [
    {
        'country': 'UA',
        'name': 'Lviv',
        'lat': '49.83826',
        'lng': '24.02324'
    },

    {
        'country': 'ES',
        'name': 'Barcelona',
        'lat': '41.38879',
        'lng': '2.15899'
      },

       {
        'country': 'DE',
        'name': 'Berlin',
        'lat': '52.52437',
        'lng': '13.41053'
      },

      {
        'country': 'IT',
        'name': 'Rome',
        'lat': '41.89193',
        'lng': '12.51133'
      },

        {
        'country': 'RU',
        'name': 'Moscow',
        'lat': '55.75222',
        'lng': '37.61556'
      },

     {
        'country': 'GB',
        'name': 'London',
        'lat': '51.50853',
        'lng': '-0.12574'
      },

       {
        'country': 'US',
        'name': 'Brighton',
        'lat': '33.43428',
        'lng': '-86.94721'
      },

      {
        'country': 'PL',
        'name': 'Warsaw',
        'lat': '52.22977',
        'lng': '21.01178'
      },

       {
        'country': 'UA',
        'name': 'Kyiv',
        'lat': '50.45466',
        'lng': '30.5238'
      },

     {
        'country': 'UA',
        'name': 'Odessa',
        'lat': '46.47747',
        'lng': '30.73262'
      },

       {
        'country': 'HR',
        'name': 'Zagreb',
        'lat': '45.81444',
        'lng': '15.97798'
      },

       {
        'country': 'ES',
        'name': 'Ibiza',
        'lat': '38.90883',
        'lng': '1.43296'
      },

       {
        'country': 'US',
        'name': 'Las Vegas',
        'lat': '35.59393',
        'lng': '-105.2239'
      },

     {
        'country': 'US',
        'name': 'New York',
        'lat': '40.71427',
        'lng': '-74.00597'
      },

      {
        'country': 'AR',
        'name': 'Buenos Aires',
        'lat': '-34.61315',
        'lng': '-58.37723'
      },

       {
        'country': 'BR',
        'name': 'Rio de Janeiro',
        'lat': '-22.90642',
        'lng': '-43.18223'
      },

      {
        'country': 'DE',
        'name': 'Munich',
        'lat': '48.13743',
        'lng': '11.57549'
      },

     {
        'country': 'ES',
        'name': 'Madrid',
        'lat': '40.4165',
        'lng': '-3.70256'
      },

       {
        'country': 'TR',
        'name': 'Istanbul',
        'lat': '41.01384',
        'lng': '28.94966'
      },

      {
        'country': 'TR',
        'name': 'Antalya',
        'lat': '36.90812',
        'lng': '30.69556'
      },

       {
        'country': 'MX',
        'name': 'Mexico',
        'lat': '19.42847',
        'lng': '-99.12766'
      },

     {
        'country': 'FR',
        'name': 'Paris',
        'lat': '48.85341',
        'lng': '2.3488'
      },

       {
        'country': 'IT',
        'name': 'Ottava',
        'lat': '40.78525',
        'lng': '8.47543'
      },

      {
        'country': 'IT',
        'name': 'Venice',
        'lat': '45.43713',
        'lng': '12.33265'
      },

        {
        'country': 'UA',
        'name': 'Kherson',
        'lat': '46.65581',
        'lng': '32.6178'
      },

        {
        'country': 'CZ',
        'name': 'Prague',
        'lat': '50.08804',
        'lng': '14.42076'
      },

       {
        'country': 'SK',
        'name': 'Bratislava',
        'lat': '48.14816',
        'lng': '17.10674'
      },

       {
        'country': 'SI',
        'name': 'Ljubljana',
        'lat': '46.05108',
        'lng': '14.50513'
      },

      {
        'country': 'NO',
        'name': 'Oslo',
        'lat': '59.91273',
        'lng': '10.74609'
      },

     {
        'country': 'NL',
        'name': 'Amsterdam',
        'lat': '52.37403',
        'lng': '4.88969'
      },

       {
        'country': 'SE',
        'name': 'Stockholm',
        'lat': '59.33258',
        'lng': '18.0649'
      },

       {
        'country': 'US',
        'name': 'Washington, D.C.',
        'lat': '38.89511',
        'lng': '-77.03637'
      },

       {
        'country': 'US',
        'name': 'Miami',
        'lat': '25.77427',
        'lng': '-80.19366'
      },

     {
        'country': 'US',
        'name': 'Los Angeles',
        'lat': '34.05223',
        'lng': '-118.24368'
      }
];

  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state.length >= 3 ? this._filterStates(state) : [])
      );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);

  }
}

