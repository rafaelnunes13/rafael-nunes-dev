import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { WeatherDataService } from '../weather/weather-data.service';
import { CacheDataService } from './cache-data.service';

describe('CacheDataService', () => {
  let service: CacheDataService;

  const weatherDataServiceMock = {
    get: jest.fn().mockReturnValue(of(
      {
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
    ))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ 
        { provide: WeatherDataService, useValue: weatherDataServiceMock }
      ]
    })
    .compileComponents();
    service = TestBed.inject(CacheDataService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should get data from WeatherDataService when the value doesnt exist in cache or is expired, and from the cache when the value is available', fakeAsync(() => {

    service.get('entry-key').subscribe();

    expect(weatherDataServiceMock.get).toHaveBeenCalledWith('entry-key');

    weatherDataServiceMock.get.mockClear();

    service.get('entry-key').subscribe();

    expect(weatherDataServiceMock.get).not.toHaveBeenCalled();

    tick(700000);
    weatherDataServiceMock.get.mockClear();

    service.get('entry-key').subscribe();

    expect(weatherDataServiceMock.get).toHaveBeenCalled();
  }));
});
