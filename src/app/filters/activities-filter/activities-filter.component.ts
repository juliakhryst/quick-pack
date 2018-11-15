import { Component, OnInit, Output, EventEmitter } from '@angular/core';
export interface ActivityFilter {
  baby: boolean;
  pet: boolean;
  sport: boolean;
}

@Component({
  selector: 'qpac-activities-filter',
  templateUrl: './activities-filter.component.html',
  styleUrls: ['./activities-filter.component.scss']
})
export class ActivitiesFilterComponent implements OnInit {

@Output()
public activitiesChanged: EventEmitter<ActivityFilter> = new EventEmitter<ActivityFilter>();

public activities: ActivityFilter = {
  baby: false,
  pet: false,
  sport: false,
  };

  constructor() { }

  ngOnInit() {
  }

  activityChange(event) {
     this.activitiesChanged.emit(this.activities);
  }

}
