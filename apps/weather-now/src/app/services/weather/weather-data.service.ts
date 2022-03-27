import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWeatherData } from './weather-data.interface';

interface ICoord {
  lat: string;
  lon: string;
}

const citiesCoords: { [key in string]: ICoord } = {
  nuuk: { lat: '64.192123', lon: '-51.714749' },
  urubici: { lat: '-28.0038892', lon: '-49.6019633' },
  nairobi: { lat: '-1.3030364', lon: '36.7771854' },
};

const APPID = '920878db11d027450130a120844ee769';
export const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

@Injectable()
export class WeatherDataService {

  constructor(private http: HttpClient) {}

  get(key: string): Observable<IWeatherData> {
    const params = new HttpParams({
      fromObject: {
        lat: citiesCoords[key].lat,
        lon: citiesCoords[key].lon,
        appid: APPID,
        units: 'metric',
      }
    });
    return this.http.get<IWeatherData>(BASE_URL, { params: params });
  }
}
