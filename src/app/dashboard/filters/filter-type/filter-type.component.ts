import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  @Output() changedType = new EventEmitter<Object>();
  Type = Type;
  selectedType: Type;
    @Output() changedSelectedType = new EventEmitter<String>();
  selectType(type: Type) {
    this.selectedType = type;
    this.changedType.emit({type: this.selectedType});
  }


  constructor() { }

  ngOnInit() {
  }

}
