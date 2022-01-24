import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  names: Label[] = [];
  barChart1: any[] = [45];
  barChart2: any[] = [70];
  barChart3: any[] = [37];
  
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartColors: Color[] = [
    {
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  barChartData: ChartDataSets[] = [
    { data: this.barChart1, label: 'Label 1' },
    { data: this.barChart2, label: 'Label 2' },
    { data: this.barChart3, label: 'Label 3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
