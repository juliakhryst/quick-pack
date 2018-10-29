import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent implements OnInit {
  selected:string;

  constructor(public translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.addLangs(['Ua', 'En']);
    translate.setDefaultLang('Ua');

    // const browserLang = translate.getBrowserLang();
    translate.use('Ua');

    this.selected = this.translate.currentLang;
  }


  ngOnInit() {
  }
}
