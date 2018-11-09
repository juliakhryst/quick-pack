import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'qpac-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit {
  @Input() response: any;

  constructor() { }

  ngOnInit() {
  }

}
