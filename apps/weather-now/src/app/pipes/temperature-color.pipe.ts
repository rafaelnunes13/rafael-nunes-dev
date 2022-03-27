import { formatNumber } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'temperatureColor' })
export class TemperatureColorPipe implements PipeTransform {

  transform(value: number): string {
    value = parseInt(formatNumber(value, 'en-US', '1.0-0'));
    if (value < 6) {
      return 'low-temperature';
    } else if (value < 26) {
      return 'medium-temperature';
    }
    return 'high-temperature';
  }
}
