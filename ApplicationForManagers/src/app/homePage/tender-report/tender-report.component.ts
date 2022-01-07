import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { TenderService } from 'src/app/service/tender.service';
import { TenderEarning } from 'src/app/shared/tenderEarnings.model';
import { TenderParticipants } from 'src/app/shared/tenderParticipants.model';

@Component({
  selector: 'app-tender-report',
  templateUrl: './tender-report.component.html',
  styleUrls: ['./tender-report.component.css'],
})
export class TenderReportComponent implements OnInit {
  tenderParticipants: TenderParticipants[] = [];
  tenderWinners:TenderParticipants[] = [];
  tenderEarnings:TenderEarning[] = [];
  pharmacyTenderEarnings:TenderEarning[] = [];
  names: Label[] = [];
  participations: number[] = [];
  wins: number[] = [];
  earnings: number[] = [];
  pharmacyEarnings: number[] = [];
  tenderNames: Label[];
  tenderPercentageWins: number[] = [];

  constructor(public service: TenderService) {}

  ngOnInit(): void {
    this.service
      .GetTenderParticipants()
      .subscribe((res) => {(this.tenderParticipants = res)
        this.service.GetTenderWins().subscribe
      ((res)=>{(this.tenderWinners = res)
        this.setTender(this.tenderParticipants);
      }) 
    });

    this.service.GetTenderWinningsPrices()
    .subscribe((res) => {
      this.tenderEarnings = res
      this.setTenderEarnings(res)
    })
   
    this.service.GetPharmacyEarnings().subscribe
    ((res)=>{
      this.pharmacyTenderEarnings = res
      this.setPharmacyTenderEarnings(res)
    })
  }

  setPharmacyTenderEarnings(tenderEarnings: TenderEarning[]){
    for(var i = 0; i < this.tenderParticipants.length; i++){
      for(var j = 0; j < tenderEarnings.length; j++){
        if(tenderEarnings[j].name == this.tenderParticipants[i].pharmacyName){
          this.pharmacyEarnings.push(tenderEarnings[j].earning)
        }
      }
    }
    this.pharmacyEarnings.push(0)
  }

  setTenderEarnings(tenderEarnings: TenderEarning[]){
    var tenders = []
    for(var i = 0; i <tenderEarnings.length; i++){
      this.earnings.push(tenderEarnings[i].earning)
      tenders.push("Tender" + tenderEarnings[i].name)
    }
    this.tenderNames = tenders
    return this.tenderNames
  }

  setTender(tenderParticipants: TenderParticipants[]) {
    var i = 0
    var pharmacyNames = []
    for(i = 0; i < tenderParticipants.length; i++){
      
      for(var j = 0; j < this.tenderWinners.length; j++){
        if(this.tenderParticipants[i].pharmacyName == this.tenderWinners[j].pharmacyName){
          this.wins.push(this.tenderWinners[j].participations)
          this.participations.push(tenderParticipants[i].participations)
          pharmacyNames.push(tenderParticipants[i].pharmacyName)

          this.tenderPercentageWins.push(this.tenderWinners[j].participations*100/this.tenderParticipants[i].participations)
          break
        }   
      }
    }
    for(i = 0; i < tenderParticipants.length;i++){
      if(!pharmacyNames.includes(tenderParticipants[i].pharmacyName)){
        pharmacyNames.push(tenderParticipants[i].pharmacyName)
        this.participations.push(tenderParticipants[i].participations)
        this.wins.push(0)
        this.tenderPercentageWins.push(0)
      }
    }
    this.names = pharmacyNames
  }


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
    { data: this.participations, label: 'Broj izlazaka na tender' },
    { data: this.wins, label: 'Broj pobeda' },
  ];

  barChartData1: ChartDataSets[] = [
    { data: this.earnings, label: 'Pobednička ponuda' },
  ];

  doughnutChartType: ChartType = 'doughnut';

  doughnutChartData: MultiDataSet = [this.pharmacyEarnings];

  doughnutChartColor1: Color[] = [
    {
      backgroundColor: ['lightpink','yellow','lightblue','lightgreen']
    },
  ];
  doughnutChartData1: MultiDataSet = [this.tenderPercentageWins];

  openPdf(){
    this.service.displayPdf();
  }
}
