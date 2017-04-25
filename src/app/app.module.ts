import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CityWeatherItemComponent } from './city-weather-item/city-weather-item.component';
import { CityWeatherListComponent } from './city-weather-list/city-weather-list.component';
import { SearchCityWeatherComponent } from './search-city-weather/search-city-weather.component';
import {WeatherService} from "./weather.service";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    CityWeatherItemComponent,
    CityWeatherListComponent,
    SearchCityWeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
