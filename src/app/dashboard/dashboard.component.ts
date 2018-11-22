import { GenerationService } from '../core/services/generation.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../core/interfaces/item';
import { Observable } from 'rxjs';
import { ActivityFilter } from './filters/filter-activities/filter-activities.component';
import { Router } from '@angular/router';
import { LocalStorageService } from '../core/services/local-storage.service';
import { DataSharingService } from '../core/services/data-sharing.service';

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

  constructor(
    private generation: GenerationService,
    private router: Router,
    private data: DataSharingService,
    private localStorage: LocalStorageService
  ) {}

  generate(): void {
    console.log(this.filterObj);
    this.data.objWithFilters = this.filterObj;
    this.localStorage.setObject('filterObj', this.filterObj);
    // this.items$ = this.generation.getListByParams(filterObj);
    this.router.navigate(['/dashboard/list']);
  }

  ngOnInit() {}

  handleFilter(filter) {
    this.filterObj = Object.assign({}, this.filterObj, filter);
  }

}
