import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-hospital-map',
  templateUrl: './hospital-map.component.html',
  styleUrls: ['./hospital-map.component.css']
})
export class HospitalMapComponent implements OnInit {

  buildings: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getBuildings().subscribe((response : any) => {
      this.buildings = response;

      console.log(response)
    });

  }

  getBuildingById(id: any) {

    if(!this.buildings) {
      return undefined;
    }

    return this.buildings.find((x: any) => x.id === id);
  }

}
