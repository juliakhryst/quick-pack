import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qpac-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleFilter(filterObj) {
    console.log(filterObj);
  }
}
