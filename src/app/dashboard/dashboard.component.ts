import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
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
  item$: Observable<any>;
  filterObj: Filters;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    // this.item$ = this.afs.collection('pack-items', ref => ref.where('category', '==', 'Clothing')).valueChanges();
  }

  handleFilter(filter) {
    console.log(filter);
    this.filterObj = Object.assign({}, this.filterObj, filter);
    console.log(this.filterObj);
  }
}
