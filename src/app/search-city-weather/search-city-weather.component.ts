import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from "@angular/forms";
import {WeatherService} from "app/weather.service";
import {WeatherData} from "../weather-data";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-search-city-weather',
  templateUrl: './search-city-weather.component.html',
  styleUrls: ['./search-city-weather.component.css']
})
export class SearchCityWeatherComponent implements OnInit {

  private searchStream = new Subject<string>();
  data: any = {};
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.searchStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((input: string) => this.weatherService.getWeatherData(input))
      .subscribe(
          retrivedData => {
            this.data = retrivedData
          }
      );
  }

  onSubmit(form: NgForm){
    this.weatherService.getWeatherData(form.value.city)
      .subscribe(
        retrivedData => {
          const cityWeatherItem = new WeatherData(retrivedData.name,
            retrivedData.weather[0].description,
            retrivedData.main.temp,
            retrivedData.wind.speed,
            retrivedData.weather.icon);
          this.weatherService.addCityWeatherItem(cityWeatherItem);
        }
      );
  }

  onSearchCity(cityName: string){
        this.searchStream.next(cityName);
  }
}
