import { Component, OnInit } from '@angular/core';

enum Type {
  Business,
  Leisure
}

@Component({
  selector: 'qpac-filter-type',
  templateUrl: './filter-type.component.html',
  styleUrls: ['./filter-type.component.scss']
})
export class FilterTypeComponent implements OnInit {
  Type = Type;
  selectedType: Type;

  selectType(type: Type) {
    this.selectedType = type;
  }

  constructor() { }

  ngOnInit() {
  }

}
