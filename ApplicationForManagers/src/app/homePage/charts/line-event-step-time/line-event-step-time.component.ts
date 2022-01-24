import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-line-event-step-time',
  templateUrl: './line-event-step-time.component.html',
  styleUrls: ['./line-event-step-time.component.css']
})
export class LineEventStepTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    const myChart = new Chart("chart1", {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
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
  }

}
