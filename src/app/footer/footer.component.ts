import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  response: any;

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    this.weather.getWeather().subscribe(
      response => {this.response = response;
        this.response = Array.of(this.response);
      },
      error => console.log(error)
    );
  }

}
