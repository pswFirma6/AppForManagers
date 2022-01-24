import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-pie-event-doctor',
  templateUrl: './pie-event-doctor.component.html',
  styleUrls: ['./pie-event-doctor.component.css']
})
export class PieEventDoctorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {const myChart = new Chart("chart3", {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
                
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
  }

}
