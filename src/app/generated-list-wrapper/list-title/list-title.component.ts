import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'qpac-list-title',
  templateUrl: './list-title.component.html',
  styleUrls: ['./list-title.component.scss']
})
export class ListTitleComponent implements OnInit {

  @Output() titleForList = new EventEmitter<String>();

  name = new FormControl('');
  durationObj = {};
  dateFrom = '';
  city = '';

  filter = {
    name: 'Lviv',
    duration: {
      from: '01/01/01'
    }
  };

  constructor() { }

  onKey(event) {
    this.titleForList.emit(event.target.value);
  }

  ngOnInit() {
    for (const p in this.filter) {
      if (this.filter.hasOwnProperty(p)) {
        if (p === 'name') {
          this.city = this.filter[p];
        }
        if (p === 'duration') {
          this.durationObj = this.filter[p];
          for (const f in this.durationObj) {
            if (f === 'from') {
              this.dateFrom = this.durationObj[f];
            }
          }
        }
      }

    }
    this.name.setValue(`${this.city} ${this.dateFrom}`);
  }

}
