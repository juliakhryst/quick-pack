import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../core/services/data-sharing.service';

@Component({
  selector: 'qpac-generated-list-wrapper',
  templateUrl: './generated-list-wrapper.component.html',
  styleUrls: ['./generated-list-wrapper.component.scss']
})
export class GeneratedListWrapperComponent implements OnInit {
  filterObj;
  destination;
  duration;

  constructor(public data: DataSharingService) { }

  ngOnInit() {
    this.filterObj = this.data.objWithFilters;
    this.destination = this.filterObj.destination.name;
    this.duration = this.filterObj.duration.from;
  }


}
