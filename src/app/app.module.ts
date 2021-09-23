import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { LocationComponent } from './location/location.component';
import { HomeComponent } from './home/home.component';
import { BreadcrumComponent } from './shared/components/breadcrum/breadcrum.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LocationComponent,
    HomeComponent,
    BreadcrumComponent,
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
