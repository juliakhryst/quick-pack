import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'qpac-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {
  selected: string;

  constructor(
    public translate: TranslateService,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.selected = this.localStorage.getItem('lang') || 'Ua';
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    this.localStorage.setItem('lang', lang);
  }
}
