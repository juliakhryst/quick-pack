import {Component, EventEmitter, Input, Output} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'qpac-pack-item',
  templateUrl: './pack-item.component.html',
  styleUrls: ['./pack-item.component.scss']
})
export class PackItemComponent {
  lang;
  @Input() item;
  @Output() removeById = new EventEmitter();
  @Input() isChecked;
  @Output() checkedChange = new EventEmitter();
  removeItem(item): void {
    this.removeById.emit(item.id);
  }
  constructor(private translate: TranslateService) {
    this.lang = this.translate.currentLang;
  }

  toggleCheck(checked) {
    this.checkedChange.emit(checked);
  }
}
