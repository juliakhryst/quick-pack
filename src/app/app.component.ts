import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { LocalStorageService } from './core/services/local-storage.service';

@Component({
  selector: 'qpac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private localStorage: LocalStorageService
  ) {
    const userLang = this.localStorage.getItem('lang');
    this.translate.addLangs(['Ua', 'En']);

    if (userLang) {
      this.translate.use(userLang);
    } else {
      this.translate.setDefaultLang('Ua');
    }
  }
}
