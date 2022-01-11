import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import jsPDF from 'jspdf';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { TenderService } from 'src/app/service/tender.service';
import { TenderEarning } from 'src/app/shared/tenderEarnings.model';
import { TenderParticipants } from 'src/app/shared/tenderParticipants.model';

@Component({
  selector: 'app-tender-report',
  templateUrl: './tender-report.component.html',
  styleUrls: ['./tender-report.component.css'],
})
export class TenderReportComponent {
  showCharts: boolean = false;
  startDate: Date;
  endDate: Date;
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

  showAllCharts(){
 
    this.service
      .GetTenderParticipants(this.startDate, this.endDate)
      .subscribe((res) => {(this.tenderParticipants = res)
        this.service.GetTenderWins(this.startDate, this.endDate).subscribe
      ((res)=>{(this.tenderWinners = res)
        this.setTender(this.tenderParticipants);
      }) 
    });

    this.service.GetTenderWinningsPrices(this.startDate, this.endDate)
    .subscribe((res) => {
      this.tenderEarnings = res
      this.setTenderEarnings(res)
    })
   
    this.service.GetPharmacyEarnings(this.startDate, this.endDate).subscribe
    ((res)=>{
      this.pharmacyTenderEarnings = res
      this.setPharmacyTenderEarnings(res)
    })

   
  }
  openPdf(){
   
    const canvas1 = document.getElementById('charts1') as HTMLCanvasElement
    const canvasImage1 = canvas1.toDataURL('image/jpeg1',1.0)
    const canvas2 = document.getElementById('charts2') as HTMLCanvasElement
    const canvasImage2 = canvas2.toDataURL('image/jpeg2',1.0)
    const canvas3 = document.getElementById('charts3') as HTMLCanvasElement
    const canvasImage3 = canvas3.toDataURL('image/jpeg3',1.0)
    const canvas4 = document.getElementById('charts4') as HTMLCanvasElement
    const canvasImage4 = canvas4.toDataURL('image/jpeg4',1.0)
    
    let pdf = new jsPDF()
    pdf.addImage(canvasImage1, 'JPEG', 0, 15, 100, 80);
    pdf.setFontSize(16)
    pdf.text('Pobednici tendera',30,10);
    pdf.addImage(canvasImage2, 'JPEG', 105, 15, 100, 80);
    pdf.text('Pobednicke ponude',135,10);
    pdf.addImage(canvasImage3, 'JPEG', -5, 105, 120, 80);
    pdf.text('Zarada',45,100);
    pdf.addImage(canvasImage4, 'JPEG', 95, 105, 120, 80);
    pdf.text('Procenat uspesnosti',133,100);
    pdf.save('TenderReport.pdf');
    console.log(this.startDate)
    console.log(this.endDate)

    window.location.reload()     

    //this.service.displayPdf(pdf)
  }

}
