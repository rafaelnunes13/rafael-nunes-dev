import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { IWeatherData } from '../weather/weather-data.interface';
import { WeatherDataService } from '../weather/weather-data.service';

export interface ICacheEntry<T> {
  updatedAt: number;
  data: T;
}

const STORAGE_KEY = 'weather-now-cache-data';
const MAX_AGE = 600000;

@Injectable({ providedIn: 'root' })
export class CacheDataService {

  private cacheEntries: { [key in string]: ICacheEntry<IWeatherData> } = this.readFromLocalStorage();

  constructor(private weatherDataService: WeatherDataService) {}

  get(key: string): Observable<ICacheEntry<IWeatherData>> {
    const entry = this.getValidCacheEntry(key);
    return entry ? of(entry) : this.updateCacheEntry(key);
  }

  private getValidCacheEntry(key: string): ICacheEntry<IWeatherData> | void {
    if (this.cacheEntries && this.cacheEntries[key] && (Date.now() < (this.cacheEntries[key].updatedAt + MAX_AGE))) {
      return this.cacheEntries[key];
    }
  }

  private readFromLocalStorage(): { [key in string]: ICacheEntry<IWeatherData> } {
    const storageValue = window.localStorage.getItem(STORAGE_KEY);
    return storageValue ? JSON.parse(storageValue) : {};
  }

  private updateCacheEntry(key: string): Observable<ICacheEntry<IWeatherData>> {
    return this.weatherDataService.get(key).pipe(
      map(weatherData => {
        this.cacheEntries[key] = {
          updatedAt: Date.now(),
          data: weatherData
        };
        return this.cacheEntries[key];
      }),
      tap(() => {
        this.updateLocalStorage();
      })
    );
  }

  private updateLocalStorage(): void {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.cacheEntries));
  }
}
