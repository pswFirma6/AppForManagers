import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { EventService } from 'src/app/service/event.service';
import { AppointmentEvent } from 'src/app/shared/AppointmentEvent';
import { AppointmentEventUncreated } from 'src/app/shared/appointmentEventUncreated';
import { SpecialitiesStat } from 'src/app/shared/statsForSpecialities';

@Component({
  selector: 'app-pie-event-doctor',
  templateUrl: './pie-event-doctor.component.html',
  styleUrls: ['./pie-event-doctor.component.css']
})
export class PieEventDoctorComponent implements OnInit {

  constructor(private eventService: EventService) { }
  specialitiesStat: AppointmentEvent[] = [];
  numberFalse: number = 0;
  numberTrue: number = 0;

  ngOnInit(): void {
    
    this.eventService.getAllEvents().subscribe(res=>{
      this.specialitiesStat = res;
      
      var l =  this.specialitiesStat.length, i;
      for( i=0; i<l; i++) {
        
        if(this.specialitiesStat[i].appointmentCreated == false){
          this.numberFalse++;
          
        }else {
          this.numberTrue++;
        }
      }
      console.log(this.numberFalse)
      console.log(this.numberTrue)

      const myChart = new Chart("chart3", {
      type: 'pie',
          data: {
              labels: [ "Created successfully", "Not created" ],
              datasets: [{
                  label: '# Success of creating new appointments! ',
                  data: [this.numberTrue, this.numberFalse],
                  backgroundColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)'
                      
                  ],
              }]
          },
          options: {
              responsive:true,
              plugins: [{
                legend:{
                  position: 'top'
                },
                title:{
                  display: true,
                  text: 'Naslov'
                }
              }],
            
          }
      });
    });

  }

}
