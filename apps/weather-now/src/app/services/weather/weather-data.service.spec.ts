import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BASE_URL, WeatherDataService } from './weather-data.service';

describe('WeatherDataService', () => {
  let service: WeatherDataService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherDataService]
    })
    .compileComponents();
    service = TestBed.inject(WeatherDataService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should call http get', done => {
    service.get('urubici').subscribe(weatherData => {
      expect(weatherData).toBeTruthy();
      done();
    });

    httpController.expectOne((req => req.url === BASE_URL)).flush(
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
      },
      { status: 200, statusText: 'OK' }
    );
  });
});