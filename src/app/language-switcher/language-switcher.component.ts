import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'qpac-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {
  selected: string;

  constructor(public translate: TranslateService) {
    translate.addLangs(['Ua', 'En']);
    translate.setDefaultLang('Ua');

    if (this.translate.currentLang === undefined) {
      translate.use('Ua');
    }

    this.selected = this.translate.currentLang;
    translate.use(this.selected);
  }

  ngOnInit() {
  }
}
