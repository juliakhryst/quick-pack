import {Component, EventEmitter, OnInit, Output} from '@angular/core';

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
  @Output() changedTypeOfGender = new EventEmitter<String>();
  Gender = Gender;
  selectedGender: Gender;

  selectGender(gender: Gender) {
    this.selectedGender = gender;
    this.changedTypeOfGender.emit(this.selectedGender);
  }

  constructor() { }

  ngOnInit() {
  }

}
