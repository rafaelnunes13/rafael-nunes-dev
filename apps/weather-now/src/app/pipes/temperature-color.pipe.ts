import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'temperatureColor' })
export class TemperatureColorPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 6) {
      return 'low-temperature';
    } else if (value < 26) {
      return 'medium-temperature';
    }
    return 'high-temperature';
  }
}
