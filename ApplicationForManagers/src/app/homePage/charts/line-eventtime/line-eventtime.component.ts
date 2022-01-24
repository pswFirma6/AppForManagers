import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-line-eventtime',
  templateUrl: './line-eventtime.component.html',
  styleUrls: ['./line-eventtime.component.css']
})
export class LineEventtimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const ctx = document.getElementById('myChart');
    const myChart = new Chart("chart", {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
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
  }

}
