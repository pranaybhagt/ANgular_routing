import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HomeStaysComponent } from './home-stays/home-stays.component';
import { HolidaysPackagesComponent } from './holidays-packages/holidays-packages.component';
import { PageNotFoundExceptionComponent } from './page-not-found-exception/page-not-found-exception.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightDeatilsComponent } from './flight-deatils/flight-deatils.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import {userInfoServices} from './service/userInfoService';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    HotelsComponent,
    HomeStaysComponent,
    HolidaysPackagesComponent,
    PageNotFoundExceptionComponent,
    FlightSearchComponent,
    FlightListComponent,
    FlightDeatilsComponent,
    HotelSearchComponent,
    HotelListComponent,
    HotelDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
