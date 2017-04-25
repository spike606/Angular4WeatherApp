import { Component, OnInit, Input } from '@angular/core';
import {WeatherData} from "../weather-data";

@Component({
  selector: 'app-city-weather-item',
  templateUrl: './city-weather-item.component.html',
  styleUrls: ['./city-weather-item.component.css'],
})
export class CityWeatherItemComponent implements OnInit {

  @Input('item') weatherItem: WeatherData;

  ngOnInit() {
  }

}
