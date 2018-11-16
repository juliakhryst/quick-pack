import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'qpac-pack-item',
  templateUrl: './pack-item.component.html',
  styleUrls: ['./pack-item.component.scss']
})
export class PackItemComponent {
  @Input() item;
  @Output() removeById = new EventEmitter();
  @Input() isChecked;
  removeItem(item): void {
    this.removeById.emit(item.id);
  }
  constructor() { }
}
