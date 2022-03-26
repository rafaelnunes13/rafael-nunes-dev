import { Component, OnInit } from '@angular/core';

export interface CityWeather {
  label: string;
  lat: string;
  long: string;
  temperature: number;
  humidity?: number;
  pressure?: number;
}

@Component({
  selector: 'rafael-nunes-dev-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cities: Array<CityWeather> = [
    { label: 'Nuuk, GL', lat: '', long: '', temperature: -4 },
    { label: 'Urubici, BR', lat: '', long: '', temperature: 19, humidity: 75, pressure: 892 },
    { label: 'Nairobi, KE', lat: '', long: '', temperature: 31 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
