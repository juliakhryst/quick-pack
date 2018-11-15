import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'qpac-pack-item',
  templateUrl: './pack-item.component.html',
  styleUrls: ['./pack-item.component.scss']
})
export class PackItemComponent implements OnInit {
  @Input() item;
  @Output() removeById = new EventEmitter();
  isChecked = false;
  removeItem(item): void {
    this.removeById.emit(item.id);
    console.log(this.item)
  }
  constructor() { }
  ngOnInit() {
  }
}
