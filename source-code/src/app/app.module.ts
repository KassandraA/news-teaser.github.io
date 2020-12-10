import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeaserResponsiveComponent } from './teaser-responsive/teaser-responsive.component';

@NgModule({
  declarations: [AppComponent, TeaserResponsiveComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
