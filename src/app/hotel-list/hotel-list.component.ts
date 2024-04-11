import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {

  city:string | null =null;
  checkIn:string | null =null;
  checkOut:string | null =null;
  constructor(private activatedRoute:ActivatedRoute){

  }
  ngOnInit(){
    this.city = this.activatedRoute.snapshot.queryParamMap.get("city");
    this.checkIn = this.activatedRoute.snapshot.queryParamMap.get("checkIn");
    this.checkOut = this.activatedRoute.snapshot.queryParamMap.get("checkOut");
    console.log("Selected city:",this.city);
    console.log("Selected checkIn:",this.checkIn);
    console.log("Selected checkOut:",this.checkOut);
    
  }

}
