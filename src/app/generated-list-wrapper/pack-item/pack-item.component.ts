import {Component, EventEmitter, Input, Output} from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'qpac-pack-item',
  templateUrl: './pack-item.component.html',
  styleUrls: ['./pack-item.component.scss']
})
export class PackItemComponent {
  sub: Subscription;
  lang;
  @Input() item;
  @Output() removeById = new EventEmitter();
  @Input() isChecked;
  removeItem(item): void {
    this.removeById.emit(item.id);
  }
  constructor(private translate: TranslateService) {
    // this.lang = this.translate.currentLang;

    this.sub = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
    });
   }
}
