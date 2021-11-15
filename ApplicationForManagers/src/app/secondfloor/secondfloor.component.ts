import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondfloor',
  templateUrl: './secondfloor.component.html',
  styleUrls: ['./secondfloor.component.css']
})
export class SecondfloorComponent implements OnInit {
  
  additionalInformation = true;
  imageUrl: string = "../../assets/images/32356.png"
  ngOnInit(): void {
  }
  Rooms={
    'Examination room': 1,
    'Examination room2': 2,
    'Examination room3': 3,
    'Cardiology room' : 4,
    'Laboratory' : 5,


  }
  name='';
  description = '';
  lab_technician = '';   
  doctor = '';
  nurse = '';
  workingHours = '';  
 

  viewAdditionalInformation(){
    this.additionalInformation = true;
  }
  isViewingAdditionalInfo(): boolean{
    return this.additionalInformation;
  }

  isShown0: boolean = false ; // hidden by default
  isShown1: boolean = false ; // hidden by default
  isShown2: boolean = false ; // hidden by default
  isShown3: boolean = false ; // hidden by default
  isShown4: boolean = false ; // hidden by default

  showRoom(room: any){

    this.additionalInformation = true;
    switch(room){
      case this.Rooms['Examination room']:
        this.isShown0 = ! this.isShown0;
        this.isShown1 = false ; // hidden by default
        this.isShown2 = false ; // hidden by default
        this.isShown3 = false ; // hidden by default
        this.isShown4 = false ; // hidden by default
        this.name = 'Examination room'
        this.description = 'Examining room for patients'
        this.doctor = 'Dr. Stefan Nikolic'
        this.workingHours = '8:00-16:00'
        break;
      case this.Rooms['Examination room2']:
        this.isShown1 = ! this.isShown1;
        this.isShown0 = false ; // hidden by default
        this.isShown2 = false ; // hidden by default
        this.isShown3 = false ; // hidden by default
        this.isShown4 = false ; // hidden by default
        this.name = 'Examination room 2'
        this.description = 'Examining room for patients'
        this.doctor = 'Dr. Tamara Lalic'
        this.workingHours = '8:00-16:00'
        break;
      case this.Rooms['Examination room3']:
        this.isShown2 = ! this.isShown2;
        this.isShown0 = false ; // hidden by default
        this.isShown1 = false ; // hidden by default
        this.isShown3 = false ; // hidden by default
        this.isShown4= false ; // hidden by default
        this.name = 'Examination room 3'
        this.description = 'Examining room for patients'
        this.doctor = 'Marko Canic'
        this.workingHours = '10:00-18:00'
        break;
      case this.Rooms['Cardiology room']:
        this.isShown3 = ! this.isShown3;
        this.isShown0 = false ; // hidden by default
        this.isShown1 = false ; // hidden by default
        this.isShown2 = false ; // hidden by default
        this.isShown4 = false ; // hidden by default
        this.name = 'Cardiology room'
        this.description = ' Cardiology room is a room to treat people with serious or acute heart problems'
        this.doctor = 'Ana Radic'
        this.workingHours = '8:00-16:00'
        break;
      case this.Rooms.Laboratory:
        this.isShown4 = ! this.isShown4;
        this.isShown0 = false ; // hidden by defaults
        this.isShown1 = false ; // hidden by default
        this.isShown2 = false ; // hidden by default
        this.isShown3 = false ; // hidden by default
        this.name = 'Laboratory'
        this.description = ' Lab room for analyzing blood,urine etc.'
        this.lab_technician = 'Marija Tatic'
        this.workingHours = '8:00-16:00'        
        break;
      
    }
  }
  constructor() { }
}
