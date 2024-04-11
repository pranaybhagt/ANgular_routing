import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userInfoServices } from '../service/userInfoService';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {

  searchForm!:FormGroup;
  // userInfoServices!:userInfoServices;
  constructor(private fb:FormBuilder,private router:Router,private userInfoService:userInfoServices,private autscv:AuthenticationService){
    // this.userInfoServices = new userInfoServices();
    // console.log(this.userInfoServices.getUserInfo());
    console.log(this.userInfoService.getUserInfo());

    

  }
  ngOnInit(){
    this.searchForm = this.fb.group({
      from:['',[Validators.required]],
      to:['',[Validators.required]]
    })

    // this.autscv.setUserCredentials();
  }
  search(){
    console.log(this.searchForm.value);
    if(this.searchForm.valid){
      let source = this.searchForm.value.from;
      let destination = this.searchForm.value.to;
      console.log("source :",source);
      console.log("destination: ",destination);
      this.router.navigate(["/flights/flight-list",source,destination])
    }
    

  }
  setUserDe(){
    this.autscv.setUserCredentials("pranay","welcome")
  }

}
