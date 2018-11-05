import { Component } from '@angular/core';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';

@Component({
  selector: 'qpac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LanguageSwitcherComponent]
})
export class AppComponent {
  constructor() {}
}

