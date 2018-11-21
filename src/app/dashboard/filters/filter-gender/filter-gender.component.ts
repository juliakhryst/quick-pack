import { Component, OnInit, EventEmitter, Output } from '@angular/core';

enum Gender {
  Male = 'male',
  Female = 'female'
}

@Component({
  selector: 'qpac-filter-gender',
  templateUrl: './filter-gender.component.html',
  styleUrls: ['./filter-gender.component.scss']
})
export class FilterGenderComponent implements OnInit {

@Output()
changedGender: EventEmitter<Object> = new EventEmitter<Object>();
  Gender = Gender;
  selectedGender: Gender;

  selectGender(gender: Gender) {
    this.selectedGender = gender;
    this.changedGender.emit({gender: this.selectedGender});
  }

  constructor() { }

  ngOnInit() {
  }

}
