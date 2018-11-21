import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataSharingService } from '../../core/services/data-sharing.service';


@Component({
  selector: 'qpac-list-title',
  templateUrl: './list-title.component.html',
  styleUrls: ['./list-title.component.scss']
})
export class ListTitleComponent implements OnInit {

  @Output() titleForList = new EventEmitter<String>();

  name = new FormControl('');
  filter;
  destination;
  duration;

  constructor(public data: DataSharingService) { }

  onKey(event) {
    this.titleForList.emit(event.target.value);
  }

  ngOnInit() {
    this.filter = this.data.objWithFilters;
    this.destination = this.filter.destination.name;
    this.duration = this.filter.duration.from;
    this.name.setValue(`${this.destination} ${this.duration}`);
  }

}
