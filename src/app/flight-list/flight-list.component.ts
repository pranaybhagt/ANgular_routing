import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent {

  source:string | null =null;
  destination:string | null = null;
  constructor(private activatedRout:ActivatedRoute){

  }
  ngOnInit(){
    console.log(this.activatedRout);
  this.source=  this.activatedRout.snapshot.paramMap.get("from");
  this.destination = this.activatedRout.snapshot.paramMap.get("to")
  console.log("selected source: ",this.source);
  console.log("selected destination ",this.destination);
  
  

  }
}
