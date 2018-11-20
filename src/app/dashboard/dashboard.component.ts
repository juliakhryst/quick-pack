import { GenerationService } from './../generation.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Item } from '../core/interfaces/item';
import { Observable } from 'rxjs';
import { ActivityFilter } from './filters/filter-activities/filter-activities.component';

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

  constructor(private afs: AngularFirestore, private generation: GenerationService) {}

  generate(filterObj): void {
    this.items$ = this.generation.getListByParams(filterObj);
  }

  ngOnInit() {}

  handleFilter(filter) {
    this.filterObj = Object.assign({}, this.filterObj, filter);
  }

}
