import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qpac-filter-gender',
  templateUrl: './filter-gender.component.html',
  styleUrls: ['./filter-gender.component.scss']
})
export class FilterGenderComponent implements OnInit {
  gender = '';
  male = false;
  female = false;


  maleSelect() {
    this.gender = 'male';
    this.male = true;
    this.female = false;

  }
  femaleSelect() {
    this.gender = 'female';
    this.male = false;
    this.female = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
