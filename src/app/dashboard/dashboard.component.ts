import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'qpac-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  item$: Observable<any>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.item$ = this.afs.collection('pack-items', ref => ref.where('category', '==', 'Clothing')).valueChanges();
  }

  handleFilter(filterObj) {
    console.log(filterObj);
  }
}
