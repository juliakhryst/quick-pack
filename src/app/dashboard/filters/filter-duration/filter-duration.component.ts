import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'qpac-filter-duration',
  templateUrl: './filter-duration.component.html',
  styleUrls: ['./filter-duration.component.scss']
})
export class FilterDurationComponent implements OnInit {
  from: string;
  to: string;
  lang: string;
  @Output() changedDepartureDate = new EventEmitter<Object>();

  public minDate() {
    return new Date();
  }

  constructor(public translate: TranslateService) {}

  ngOnInit() {}

  change(from: any, lang: string) {
      lang = this.translate.currentLang;
      if (lang === 'Ua' || lang === undefined) {
        lang = 'uk';
      } else if (lang === 'En') {
        lang = 'en';
      }

      from = (moment(from).format('YYYY[-]MM[-]DD'));
      this.changedDepartureDate.emit({duration: {from, lang}});
  }
}
