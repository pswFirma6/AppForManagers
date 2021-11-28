import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-equipment-transfer',
  templateUrl: './equipment-transfer.component.html',
  styleUrls: ['./equipment-transfer.component.css']
})
export class EquipmentTransferComponent implements OnInit {

  allEquipment: any;
  name: any;
  





  constructor(private apiService: ApiService) { 
  }
  ngOnInit() {
    this.apiService.getEquipments().subscribe((response : any) => {
      this.allEquipment = response;
    });

  }








  personalInfoComplete = true;
  addressComplete = false;
  creditCardComplete = false;
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

  addressSubmit() {
    this.addressComplete = false;
    this.creditCardComplete = true;
    this.stepTwo = true;
  }

  creditCardSubmit() {
    this.creditCardComplete = false;
    this.completedOrder = true;
    this.stepThree = true;
  }

}
