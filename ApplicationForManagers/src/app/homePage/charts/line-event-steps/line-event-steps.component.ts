import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { EventService } from 'src/app/service/event.service';
import { AppointmentEventUncreated } from 'src/app/shared/appointmentEventUncreated';

@Component({
  selector: 'app-line-event-steps',
  templateUrl: './line-event-steps.component.html',
  styleUrls: ['./line-event-steps.component.css']
})
export class LineEventStepsComponent implements OnInit {

  constructor(private eventService: EventService) { }
  appEvent: AppointmentEventUncreated[] = [];
  public ids: number[] = [];
  public evSteps: number[] = [];

  ngOnInit(): void {
    
    this.eventService. getAllUncreatedAppEvents().subscribe( res => {
      this.appEvent = res;
      
      
      this.ids .push(0);
      this.evSteps.push(0);
      var l =  this.appEvent.length, i;
      
      for( i=0; i<l; i++) {
      
        this.evSteps.push(this.appEvent[i].eventsStep.length);
   
        this.ids.push( this.appEvent[i].id);
       
      }
  
  
      const myChart = new Chart("chart2", {
        type: 'line',
            
            data: {
                labels:  this.ids ,
                datasets: [{
                    label: 'Steps per uncomplited appointment',
                    data: this.evSteps,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                        
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1,
                    fill:false,
                    steppedLine : true,
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
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
            }
        });

    });

   
  }

}
