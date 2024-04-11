import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from './flights/flights.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HomeStaysComponent } from './home-stays/home-stays.component';
import { HolidaysPackagesComponent } from './holidays-packages/holidays-packages.component';
import { PageNotFoundExceptionComponent } from './page-not-found-exception/page-not-found-exception.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightDeatilsComponent } from './flight-deatils/flight-deatils.component';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';

const routes: Routes = [
  {path:"flights",component:FlightsComponent,children:[
    {path:"flight-search",component:FlightSearchComponent},
    {path:"flight-list/:from/:to",component:FlightListComponent},
    {path:"flight-deatils",component:FlightDeatilsComponent}
  ]},
  {path:"hotels",component:HotelsComponent,children:[
    {path:"hotel-search",component:HotelSearchComponent},
    {path:"hotel-list",component:HotelListComponent},
    {path:"hotel-deatils",component:HotelDetailsComponent}
  ]},
  {path:"homestays",component:HomeStaysComponent},
  {path:"holidaysPackages",component:HolidaysPackagesComponent},
  // {path:"",component:FlightsComponent} //deafult route
  { path: "", redirectTo: '/flights', pathMatch: 'full' },
  {path:"**",component:PageNotFoundExceptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
