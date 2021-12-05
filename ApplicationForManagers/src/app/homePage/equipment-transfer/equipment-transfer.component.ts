import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Steps } from './steps';

@Component({
  selector: 'app-equipment-transfer',
  templateUrl: './equipment-transfer.component.html',
  styleUrls: ['./equipment-transfer.component.css']
})
export class EquipmentTransferComponent implements OnInit {

  Steps = Steps;
  allEquipment: any[];
  allRooms: any;
  amount: any;
  steps: Steps;
  selectedEquipment: any;
  selectedStartRoom: any;
  selectedDestionationRoom: any;
  dateObj: Date; 



  constructor(private apiService: ApiService) { 
    setInterval(() => {
      this.dateObj = new Date()
    }, 1000)
  }
  ngOnInit() {
    this.apiService.getEquipments().subscribe((response : any) => {
      this.allEquipment = response;
    });

    this.apiService.getRooms().subscribe((response : any) => {
      this.allRooms = response;
    });
    this.selectedEquipment = '';
    this.selectedStartRoom = 'Surgery room';
    this.steps = Steps.equipmentSelection;
  }
  getDistinctEquipment(){
    var flags = [], output = [], l =  this.allEquipment.length, i;
    for( i=0; i<l; i++) {
        if( flags[ this.allEquipment[i].name]) continue;
        flags[ this.allEquipment[i].name] = true;
        output.push( this.allEquipment[i].name);
    }
    return output;
  }


  getRoomsByEquipment(){
    return this.allEquipment.filter((x: any) => x.name === this.selectedEquipment) ;
  }

  getMaxAmount(){
    return this.allEquipment.find((x: any) => x.name === this.selectedEquipment && x.room.name === this.selectedStartRoom) ;
  }
  

  checkStep(step: any){
    return step === this.steps;
  }
  
  
  addressSubmit() {
    this.steps++;
  }

  getBoja(number: any){
    return (this.steps > number - 1) ? 'green' : 'lightgrey';
  }
  finishedEquipmentSelection(selectedEquipment: any){
    this.selectedEquipment = selectedEquipment;
    this.addressSubmit();
  }

  finishedStartRoomSelection(selectedStartRoom: any){
    this.selectedStartRoom = selectedStartRoom;
    this.addressSubmit();
  }

  finishedDestionationRoomSelection(selectedDestionationRoom: any){
    this.selectedDestionationRoom = selectedDestionationRoom;
    this.addressSubmit();
  }

  setSteps(num: any){
    if(this.steps < num){
      return;
    }
    this.steps = num;
  }


 







  personalInfoComplete = false;
  addressComplete = false;
  creditCardComplete = true;
  completedOrder = false;

  stepOne = false;
  stepTwo = false;
  stepThree = false;

  customer = false;



  customerInformation = [];


  fruite = ['apple','orange'];

  // userInfoArray: UserInfo;

  // name;



  personalInfoSubmit() {
    this.personalInfoComplete = false;
    this.addressComplete = true;
    this.stepOne = true;
    this.customer = true;



    // this.customerInformation.push(this.userInfoArray.name);
    // this.customerInformation.push({
    //   name: this.userInfoArray.name,
    //   email: this.userInfoArray.email
    // });

   // console.log('Your Info ' + this.name.userInfoArray);
  }


  creditCardSubmit() {
    this.creditCardComplete = false;
    this.completedOrder = true;
    this.stepThree = true;
  }

}
