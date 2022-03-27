export interface IWeatherData {
  name: string;
  sys: {
    country: string
  };
  main: {
    temp: number,
    pressure: number,
    humidity: number
  };
}
