import { Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CacheDataService, ICacheEntry } from '../../services/cache/cache-data.service';
import { IWeatherData } from '../../services/weather/weather-data.interface';

import { CardComponent } from './card.component';

@Pipe({ name: 'temperatureColor' })
class MockTemperatureColorPipe implements PipeTransform {
  transform(value: number): string {
    return 'class';
  }
}

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  const cacheEntry: ICacheEntry<IWeatherData> = {
    updatedAt: Date.now(),
    data: {
      name: 'City Name',
      sys: {
        country: 'Country',
      },
      main: {
        temp: 25,
        pressure: 999,
        humidity: 65
      }
    }
  };

  const mockCacheDataService = { get: jest.fn().mockReturnValue(of(cacheEntry)) };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent, MockTemperatureColorPipe ],
      providers: [
        { provide: CacheDataService, useValue: mockCacheDataService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.entry = { key: 'city', name: 'City name' };
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
