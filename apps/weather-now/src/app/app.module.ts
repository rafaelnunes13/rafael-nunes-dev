import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, CardComponent, HeaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
