import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-firstfloor',
  templateUrl: './firstfloor.component.html',
  styleUrls: ['./firstfloor.component.css']
})
export class FirstfloorComponent implements OnInit {
  
  rooms : any;
  doctors : any;
  equipments: any;

  constructor(private apiService: ApiService) { }
  
  ngOnInit(): void {
    
    this.apiService.getRooms().subscribe((response : any) => {
      this.rooms = response;
      
    });


    this.apiService.getEquipments().subscribe((response : any) => {
      this.equipments = response;

    });

    this.apiService.getDoctors().subscribe((response : any) => {
      this.doctors = response;

    });
    

  }



  getEquipmentByRoomId(id: any){
    return this.equipments.filter((x: any) => x.room.id === id) ;  //find pronalazi jedan sa osobinom, filter pronalazi sve sa osobinom
  }

  getDoctorById(id : any)
  {

  }

  getRoomById(id: any) {

    if(!this.rooms) {
      return undefined;
    }

    return this.rooms.find((x: any) => x.id === id);
  }

  isShown1: boolean = false ;
  isShown2: boolean = false ;
  isShown3: boolean = false ;
  isShown4: boolean = false ;
  isShown5: boolean = false ;
  isShown6: boolean = false ;
  isShown7: boolean = false ;

  showRoom(id: any){
    if(id == 1){
      this.isShown1 = ! this.isShown1;
      this.isShown2 = false ;
      this.isShown3 = false ;
      this.isShown4 = false ; 
      this.isShown5 = false ; 
      this.isShown6 = false ; 
      this.isShown7 = false ; 
      
    }
    else if(id == 2){
      this.isShown2 = ! this.isShown2;
      this.isShown1 = false ;
      this.isShown3 = false ;
      this.isShown4 = false ; 
      this.isShown5 = false ; 
      this.isShown6 = false ; 
      this.isShown7 = false ; 
    }
    else if(id == 3){
      this.isShown3 = ! this.isShown3;
      this.isShown2 = false ;
      this.isShown1 = false ;
      this.isShown4 = false ; 
      this.isShown5 = false ; 
      this.isShown6 = false ; 
      this.isShown7 = false ; 
    }
    else if(id == 4){
      this.isShown4 = ! this.isShown4;
      this.isShown2 = false ;
      this.isShown3 = false ;
      this.isShown1 = false ; 
      this.isShown5 = false ; 
      this.isShown6 = false ; 
      this.isShown7 = false ; 
    }
    else if(id == 5){
      this.isShown5 = ! this.isShown5;
      this.isShown2 = false ;
      this.isShown3 = false ;
      this.isShown4 = false ; 
      this.isShown1 = false ; 
      this.isShown6 = false ; 
      this.isShown7 = false ; 
    }
    else if(id == 6){
      this.isShown6 = ! this.isShown6;
      this.isShown2 = false ;
      this.isShown3 = false ;
      this.isShown4 = false ; 
      this.isShown5 = false ; 
      this.isShown1 = false ; 
      this.isShown7 = false ; 
    }
    else if(id == 7){
      this.isShown7 = ! this.isShown7;
      this.isShown2 = false ;
      this.isShown3 = false ;
      this.isShown4 = false ; 
      this.isShown5 = false ; 
      this.isShown6 = false ; 
      this.isShown1 = false ; 
    }
  
  }
}
