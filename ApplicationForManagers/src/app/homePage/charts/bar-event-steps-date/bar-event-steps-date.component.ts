import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-bar-event-steps-date',
  templateUrl: './bar-event-steps-date.component.html',
  styleUrls: ['./bar-event-steps-date.component.css']
})
export class BarEventStepsDateComponent implements OnInit {
  public steps: number[]=[];
  constructor(private eventService:EventService) { }

  ngOnInit(): void {
    this.eventService.getDates().subscribe(res=>{
      this.steps = res
    
      const myChart = new Chart("chart7", {
        type: 'bar',
        data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Avg','Sep','Oct','Nov','Dec'],
            datasets: [{
                label: 'Steps per month',
                data: this.steps,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)'
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
                text: 'Broj koraka po mesecu'
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
