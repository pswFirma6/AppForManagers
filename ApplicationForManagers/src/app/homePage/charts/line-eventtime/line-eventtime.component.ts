import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { EventService } from 'src/app/service/event.service';
import { AppointmentEvent } from 'src/app/shared/AppointmentEvent';


@Component({
  selector: 'app-line-eventtime',
  templateUrl: './line-eventtime.component.html',
  styleUrls: ['./line-eventtime.component.css']
})
export class LineEventtimeComponent implements OnInit {
  public allEvents : AppointmentEvent[] = [];
  public ids: number[] = [];
  public time: number[] = [];
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    
    this.eventService.getAllEvents().subscribe(res=>{
      this.allEvents = res;
      this.ids.push(0);
      this.time.push(0);
      var l =  this.allEvents.length, i;
      for( i=0; i<l; i++) {
        this.time.push(this.allEvents[i].timeSpan);
        this.ids.push( this.allEvents[i].id);
    }
    const myChart = new Chart("chart", {
      type: 'line',
      data: {
          labels: this.ids,
          datasets: [{
              label: 'Time in ms',
              data: this.time,
              fill:false,
              lineTension:0,
              borderColor: [
                  'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1
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
