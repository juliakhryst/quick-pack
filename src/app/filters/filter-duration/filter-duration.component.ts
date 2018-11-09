import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'qpac-filter-duration',
  templateUrl: './filter-duration.component.html',
  styleUrls: ['./filter-duration.component.scss']
})
export class FilterDurationComponent implements OnInit {
  from: string;
  to: string;
  @Output() changedDepartureDate = new EventEmitter<boolean>();

  public minDate() {
    return new Date();
  }

  constructor() {}

  ngOnInit() {}

  change(from: any) {
      from = (moment(from).format('YYYY[-]MM[-]DD'));
      this.changedDepartureDate.emit(from);
  }

}
