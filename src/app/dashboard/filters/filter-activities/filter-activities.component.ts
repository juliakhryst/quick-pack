import { Component, OnInit, Output, EventEmitter } from '@angular/core';
export interface ActivityFilter {
  baby: boolean;
  pet: boolean;
  sport: boolean;
}

@Component({
  selector: 'qpac-filter-activities',
  templateUrl: './filter-activities.component.html',
  styleUrls: ['./filter-activities.component.scss']
})
export class FilterActivitiesComponent implements OnInit {

@Output()
public activitiesChanged: EventEmitter<Object> = new EventEmitter<Object>();

public activities: ActivityFilter = {
  baby: false,
  pet: false,
  sport: false,
  };

  constructor() { }

  ngOnInit() {
  }

  activityChange(event) {
     this.activitiesChanged.emit({activities: this.activities});
  }

}
