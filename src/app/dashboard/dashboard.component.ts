import { GenerationService } from '../core/services/generation.service';
import { WeatherService } from './weather.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Item } from '../core/interfaces/item';
import { Observable } from 'rxjs';
import { ActivityFilter } from './filters/filter-activities/filter-activities.component';
import { Router } from '@angular/router';
import { LocalStorageService } from '../core/services/local-storage.service';

export interface Filters {
  activities?: ActivityFilter;
  duration?: any;
}

@Component({
  selector: 'qpac-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  items$: Observable<Item[]>;
  response: Object;

  fromDate: string;
  typeOfTrip: string;
  typeOfGender: string;
  filterObj: Filters;

  constructor(private afs: AngularFirestore,
     private weather: WeatherService,
     private generation: GenerationService,
     private router: Router,
     localStorage: LocalStorageService
    ) {
   }


  generate(filterObj): void {
    this.items$ = this.generation.getListByParams(filterObj);
    this.router.navigate(['/dashboard/generated-list']);
  }

  ngOnInit() {}

  handleFilter(filter) {
    this.filterObj = Object.assign({}, this.filterObj, filter);
  }

}
