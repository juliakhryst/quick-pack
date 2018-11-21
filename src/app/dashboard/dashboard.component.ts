import { GenerationService } from '../core/services/generation.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../core/interfaces/item';
import { Observable } from 'rxjs';
import { ActivityFilter } from './filters/filter-activities/filter-activities.component';
import { Router } from '@angular/router';

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

  constructor(private generation: GenerationService, private router: Router) {}

  generate(filterObj): void {
    this.items$ = this.generation.getListByParams(filterObj);
    this.router.navigate(['/dashboard/list']);
  }

  ngOnInit() {}

  handleFilter(filter) {
    this.filterObj = Object.assign({}, this.filterObj, filter);
  }

}
