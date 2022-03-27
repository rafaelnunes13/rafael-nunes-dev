import { TemperatureColorPipe } from './temperature-color.pipe';

describe('TemperatureColorPipe', () => {
  let pipe: TemperatureColorPipe;

  beforeEach(() => {
    pipe = new TemperatureColorPipe();
  });

  it('should create pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('should consider values equal or below 5 as low temperature', () => {
    expect(pipe.transform(5)).toEqual('low-temperature');
    expect(pipe.transform(4)).toEqual('low-temperature');
  });

  it('should consider values equal or below 25 as medium temperature', () => {
    expect(pipe.transform(25)).toEqual('medium-temperature');
    expect(pipe.transform(24)).toEqual('medium-temperature');
  });

  it('should consider values above 25 as high temperature', () => {
    expect(pipe.transform(26)).toEqual('high-temperature');
    expect(pipe.transform(27)).toEqual('high-temperature');
  });
});