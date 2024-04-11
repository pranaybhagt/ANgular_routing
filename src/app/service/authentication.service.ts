import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userName:string="";
  password:string="";
  constructor() { }

   setUserCredentials(u_name:string,u_password:string){
    this.userName = u_name;
    this.password = u_password;
   }

   getUserCredentials(){
     let obj={
       userName:this.userName,
       pasword:this.password
     }
     return obj
   }

}
