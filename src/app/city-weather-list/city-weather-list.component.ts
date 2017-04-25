import { Component, OnInit } from '@angular/core';
import {WeatherData} from "../weather-data";
import {WeatherService} from "../weather.service";

@Component({
  selector: 'app-city-weather-list',
  templateUrl: './city-weather-list.component.html',
  styleUrls: ['./city-weather-list.component.css']
})
export class CityWeatherListComponent implements OnInit {

  WeaterDataItems: WeatherData[];

  constructor(private weatherService: WeatherService) { }

  ngOnInit()  {
    this.WeaterDataItems = this.weatherService.getCityWeatherItems();
  }

}
