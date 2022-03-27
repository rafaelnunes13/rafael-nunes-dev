import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CacheDataService, ICacheEntry } from '../../services/cache/cache-data.service';
import { IWeatherData } from '../../services/weather/weather-data.interface';

export interface ICityWeather {
  key: string,
  name: string;
}

@Component({
  selector: 'rafael-nunes-dev-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  data: Array<ICityWeather> = [
    { key: 'nuuk', name: 'Nuuk, GL' },
    { key: 'urubici', name: 'Urubici, BR' },
    { key: 'nairobi', name: 'Nairobi, KE' }
  ];
}
