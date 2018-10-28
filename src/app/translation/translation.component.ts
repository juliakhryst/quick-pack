import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent implements OnInit {

  constructor(public translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.addLangs(['Ukr', 'En']);
    translate.setDefaultLang('Ukr');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ukr/) ? browserLang : 'Ukr');

  }

  ngOnInit() {
  }
}
