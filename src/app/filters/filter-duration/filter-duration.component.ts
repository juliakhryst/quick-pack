import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filter-duration',
  templateUrl: './filter-duration.component.html',
  styleUrls: ['./filter-duration.component.scss']
})
export class FilterDurationComponent implements OnInit {

  from: string;
  to: string;
  public minDate() {
    return new Date();
  }
  constructor() {}

  ngOnInit() {}

}
