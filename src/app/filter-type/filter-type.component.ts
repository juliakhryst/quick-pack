import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qpac-filter-type',
  templateUrl: './filter-type.component.html',
  styleUrls: ['./filter-type.component.scss']
})
export class FilterTypeComponent implements OnInit {
  selectType = '';
  business = false;
  leisure = false;

  businessSelect() {
    this.selectType = 'business';
    this.business = true;
    this.leisure = false;

  }
  leisureSelect() {
    this.selectType = 'leisure';
    this.business = false;
    this.leisure = true;
  }


  constructor() { }

  ngOnInit() {
  }

}
