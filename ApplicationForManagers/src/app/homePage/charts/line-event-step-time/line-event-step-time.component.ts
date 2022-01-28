import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-line-event-step-time',
  templateUrl: './line-event-step-time.component.html',
  styleUrls: ['./line-event-step-time.component.css']
})
export class LineEventStepTimeComponent implements OnInit {
 public avgTime: number[]=[];
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getAverageStepTime().subscribe(res=>{
      let avgTimeTest = res;
      console.log(avgTimeTest);
      this.avgTime = avgTimeTest;

      const myChart = new Chart("chart1", {
        type: 'line',
        data: {
            labels: ['EventDate', 'EventSpecialization', 'EventDoctor', 'EventTerm'],
            datasets: [{
                label: 'Time in ms',
                data:this.avgTime,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                    
                ],
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
