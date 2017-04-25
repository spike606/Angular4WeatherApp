import { Injectable } from '@angular/core';
import {WEATHER_DATA_SOURCE} from "./weather-data-source";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import 'rxjs/Rx';
import {WeatherData} from "./weather-data";

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getCityWeatherItems(){
    return WEATHER_DATA_SOURCE;
  }

  addCityWeatherItem(cityWeatherItem: WeatherData){
    WEATHER_DATA_SOURCE.push(cityWeatherItem);
  }

  getWeatherData(cityName: string): Observable<any>{
    return this.http
      .get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=YOUR_KEY&units=metric')
      .map(response => response.json())
      .catch(error => {
          return Observable.empty()
        }
      );
  }
}
