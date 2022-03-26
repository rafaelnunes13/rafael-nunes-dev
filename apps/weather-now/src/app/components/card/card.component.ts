import { Component, Input, OnInit } from '@angular/core';
import { CityWeather } from '../main/main.component';

@Component({
  selector: 'rafael-nunes-dev-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  city: CityWeather;

  constructor() { }

  ngOnInit(): void {
  }

}
