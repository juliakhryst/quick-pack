import { Component, OnInit } from '@angular/core';

enum Gender {
  Male,
  Female
}

@Component({
  selector: 'app-qpac-filter-gender',
  templateUrl: './filter-gender.component.html',
  styleUrls: ['./filter-gender.component.scss']
})
export class FilterGenderComponent implements OnInit {

  Gender = Gender;
  selectedGender: Gender;

  selectGender(gender: Gender) {
    this.selectedGender = gender;

  }

  constructor() { }

  ngOnInit() {
  }

}
