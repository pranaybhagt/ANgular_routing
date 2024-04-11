import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {userInfoServices} from '../service/userInfoService';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.css']
})
export class HotelSearchComponent {

  hotelSearch:HotelSearch =new HotelSearch();
  // userInfoServices!:userInfoServices;
  constructor(private router:Router, private userInfoService:userInfoServices, private authScs:AuthenticationService){
    // this.userInfoServices = new userInfoServices();
    // console.log(this.userInfoServices.getUserInfo());
    console.log(this.userInfoService.getUserInfo());
    
    
  }
  ngOnInit(){
       console.log(this.authScs.getUserCredentials());
       
  }
  
  searchHotel(){
    console.log(this.hotelSearch);
    this.router.navigate(["/hotels/hotel-list"],{queryParams:{
      city:this.hotelSearch.city,
      checkIn:this.hotelSearch.checkIn,
      checkOut:this.hotelSearch.checkOut
    }})
    
  }
  
}


class HotelSearch{
    city:string="";
    checkIn:string="";
    checkOut:string="";
}