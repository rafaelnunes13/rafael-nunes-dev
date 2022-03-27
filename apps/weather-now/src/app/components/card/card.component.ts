import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CacheDataService, ICacheEntry } from '../../services/cache/cache-data.service';
import { IWeatherData } from '../../services/weather/weather-data.interface';
import { ICityWeather } from '../main/main.component';

@Component({
  selector: 'rafael-nunes-dev-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  entry: ICityWeather;

  data$: Observable<ICacheEntry<IWeatherData>>;

  constructor(private cacheDataService: CacheDataService) { }

  ngOnInit(): void {
    this.data$ = this.cacheDataService.get(this.entry.key);
  }
}
