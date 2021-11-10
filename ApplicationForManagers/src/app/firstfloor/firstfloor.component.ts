import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstfloor',
  templateUrl: './firstfloor.component.html',
  styleUrls: ['./firstfloor.component.css']
})
export class FirstfloorComponent implements OnInit {
  additionalInformation = true;
  constructor() { }
  Rooms={
    'SurgeryRoom': 1,
    'Radiology': 2,
    'X-Ray room': 3,
    'Stockroom' : 4,
    'ToiletStaff' : 5,
    'ToiletWomen' : 6,
    'ToiletMen' : 7

  }
  name='';
  description = '';
  doctor = '';
  nurse = '';
  workingHours = '';
  ngOnInit(): void {
  }

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
  isShown5: boolean = false ; // hidden by default
  isShown6: boolean = false ; // hidden by default

  showRoom(room: any){

    this.additionalInformation = true;
    switch(room){
      case this.Rooms.SurgeryRoom:
        this.isShown0 = ! this.isShown0;
        this.isShown1 = false ; // hidden by default
        this.isShown2 = false ; // hidden by default
        this.isShown3 = false ; // hidden by default
        this.isShown4 = false ; // hidden by default
        this.isShown5 = false ; // hidden by default
        this.isShown6 = false ; // hidden by default
        this.name = 'Surgery room'
        this.description = 'Surgery room for surgical procedures'
        this.doctor = 'Dr. Goran Lalic'
        this.workingHours = '8:00-16:00'
        break;
      case this.Rooms.Radiology:
        this.isShown1 = ! this.isShown1;
        this.isShown0 = false ; // hidden by default
        this.isShown2 = false ; // hidden by default
        this.isShown3 = false ; // hidden by default
        this.isShown4 = false ; // hidden by default
        this.isShown5 = false ; // hidden by default
        this.isShown6 = false ; // hidden by default
        this.name = 'Radiology room'
        this.description = 'For radiology pourpse'
        this.doctor = 'Dr. Marina Markovic'
        this.workingHours = '8:00-16:00'
        break;
      case this.Rooms['X-Ray room']:
        this.isShown2 = ! this.isShown2;
        this.isShown0 = false ; // hidden by default
        this.isShown1 = false ; // hidden by default
        this.isShown3 = false ; // hidden by default
        this.isShown4= false ; // hidden by default
        this.isShown5 = false ; // hidden by default
        this.isShown6 = false ; // hidden by default
        this.name = 'X-Ray room'
        this.description = 'X-Ray room for determining fractures or diseases'
        this.nurse = 'Branka Stefanovic'
        this.workingHours = '8:00-16:00'
        break;
      case this.Rooms.Stockroom:
        this.isShown3 = ! this.isShown3;
        this.isShown0 = false ; // hidden by default
        this.isShown1 = false ; // hidden by default
        this.isShown2 = false ; // hidden by default
        this.isShown4 = false ; // hidden by default
        this.isShown5 = false ; // hidden by default
        this.isShown6 = false ; // hidden by default
        this.name = 'Stockroom'
        this.description = 'Place for medicine supplies'
        break;
      case this.Rooms.ToiletStaff:
        this.isShown4 = ! this.isShown4;
        this.isShown0 = false ; // hidden by default
        this.isShown1 = false ; // hidden by default
        this.isShown2 = false ; // hidden by default
        this.isShown3 = false ; // hidden by default
        this.isShown5 = false ; // hidden by default
        this.isShown6 = false ; // hidden by default
        this.name = 'Toilet Staff'
        break;
      case this.Rooms.ToiletWomen:
        this.isShown5 = ! this.isShown5;
        this.isShown0 = false ; // hidden by default
        this.isShown1 = false ; // hidden by default
        this.isShown2 = false ; // hidden by default
        this.isShown3 = false ; // hidden by default
        this.isShown4 = false ; // hidden by default
        this.isShown6 = false ; // hidden by default
        this.name = 'Toilet Women'
        break;
      case this.Rooms.ToiletMen:
        this.isShown6 = ! this.isShown6;
        this.isShown0 = false ; // hidden by default
        this.isShown1 = false ; // hidden by default
        this.isShown2 = false ; // hidden by default
        this.isShown3 = false ; // hidden by default
        this.isShown4 = false ; // hidden by default
        this.isShown5 = false ; // hidden by default
        this.name = 'Toilet Men'
        break;
    }
    
  }

}
