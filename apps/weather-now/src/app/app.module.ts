import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { TemperatureColorPipe } from './pipes/temperature-color.pipe';
import { WeatherDataService } from './services/weather/weather-data.service';

@NgModule({
  declarations: [AppComponent, CardComponent, HeaderComponent, MainComponent, TemperatureColorPipe],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
