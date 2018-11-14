import {Component, EventEmitter, OnInit, Output} from '@angular/core';

enum Type {
  Business = 'Business',
  Leisure = 'Leisure'
}

@Component({
  selector: 'qpac-filter-type',
  templateUrl: './filter-type.component.html',
  styleUrls: ['./filter-type.component.scss']
})
export class FilterTypeComponent implements OnInit {
  Type = Type;
  selectedType: Type;
    @Output() changedSelectedType = new EventEmitter<String>();
  selectType(type: Type) {
    this.selectedType = type;
    this.changedSelectedType.emit(this.selectedType);
  }

  constructor() { }

  ngOnInit() {
  }

}
