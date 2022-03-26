import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CurrentWeatherService {
  constructor(private http: HttpClient) {}
}
