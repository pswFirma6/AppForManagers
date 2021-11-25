import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-secondfloor',
  templateUrl: './secondfloor.component.html',
  styleUrls: ['./secondfloor.component.css']
})
export class SecondfloorComponent implements OnInit {

  rooms : any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getRooms().subscribe((response : any) => {
      this.rooms = response;

    });

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


  showRoom(id: any){
    if(id == 8){
      this.isShown1 = ! this.isShown1;
      this.isShown2 = false ;
      this.isShown3 = false ;
      this.isShown4 = false ; 
      this.isShown5 = false ; 
     
      
    }
    else if(id == 9){
      this.isShown2 = ! this.isShown2;
      this.isShown1 = false ;
      this.isShown3 = false ;
      this.isShown4 = false ; 
      this.isShown5 = false ; 
      
    }
    else if(id == 10){
      this.isShown3 = ! this.isShown3;
      this.isShown2 = false ;
      this.isShown1 = false ;
      this.isShown4 = false ; 
      this.isShown5 = false ; 

    }
    else if(id == 11){
      this.isShown4 = ! this.isShown4;
      this.isShown2 = false ;
      this.isShown3 = false ;
      this.isShown1 = false ; 
      this.isShown5 = false ; 
    
    }
    else if(id == 12){
      this.isShown5 = ! this.isShown5;
      this.isShown2 = false ;
      this.isShown3 = false ;
      this.isShown4 = false ; 
      this.isShown1 = false ; 
    
    }
  
  }
}
