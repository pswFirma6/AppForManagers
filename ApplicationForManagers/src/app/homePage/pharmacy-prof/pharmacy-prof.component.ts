import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pharmacy } from 'src/app/shared/pharmacy';
import { PharmacyComment } from 'src/app/shared/pharmacy-comment';
import { PharmacyCommentService } from 'src/app/shared/pharmacy-comment.service';
import { PharmacyService } from 'src/app/shared/pharmacy.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { ChartsModule } from 'ng2-charts';
import { TenderService } from 'src/app/service/tender.service';
import { TenderEarning } from 'src/app/shared/tenderEarnings.model';
import { Medicine } from 'src/app/shared/medicine.model';


@Component({
  selector: 'app-pharmacy-prof',
  templateUrl: './pharmacy-prof.component.html',
  styleUrls: ['./pharmacy-prof.component.css']
})
export class PharmacyProfComponent implements OnInit {

  pharmacyName: string = "";
  pharmacies: Pharmacy[] = [];
  comments: PharmacyComment[] = [];
  pharmacy: Pharmacy = new Pharmacy();
  editModeOn: boolean = false;
  commentModeOn: boolean = false;
  commentContent: string = "";
  id: number = 0;
  comment: PharmacyComment = new PharmacyComment();
  pharmacyAddress: string = "";
  pharmacyCity: string = "";
  selectedFile: string = "";
  uploadModeOn: boolean = false;
  currentPharmacyImage: SafeResourceUrl = "";

  pharmacyOffers: TenderEarning[] = []
  tenders: Label[] = []
  winningTenders: Label[] = []
  moneyOffers: number[] = []
  winningMoneyOffers: number[] = []
  pharmacyWinningOffers: TenderEarning[] = []
  pharmacyParticipations: number = 0
  pharmacyWins:number = 0
  pharmacyWinRatio: number[] = []
  medicines:Medicine[] = []
  medicineNames:Label[] = []
  medicineQuantity: number[] = []

  constructor(private router: Router, private service: PharmacyService,
     private service2: PharmacyCommentService,
     private toastr: ToastrService,
     private domSanitizer: DomSanitizer,
     private tenderService: TenderService) { }

  ngOnInit(): void {
    this.pharmacyName = this.extractPharmacyName(this.router.url)
    this.service.getPharmacy(this.extractPharmacyName(this.pharmacyName))
      .subscribe(res => { this.pharmacy = res; this.loadCurrentPharmacyImage(this.pharmacy.pharmacyPicture);});
    this.service2.getPharmacyComments(this.extractPharmacyName(this.pharmacyName))
    .subscribe(res => this.comments = res);
    this.tenderService.GetPharmacyOffers(this.pharmacyName).subscribe(
      res => {
        this.pharmacyOffers = res
        this.setPharmacyOffers(this.pharmacyOffers)
      }
    )
    this.tenderService.GetPharmacyWinningOffer(this.pharmacyName).subscribe(
      res =>{
        this.pharmacyWinningOffers = res
        this.setPharmacyWinningOffers(this.pharmacyWinningOffers)
      }
    )
    this.tenderService.GetPharmacyWins(this.pharmacyName).subscribe(
      res=>{
        this.pharmacyWins = res[0]
        this.tenderService.GetPharmacyParticipations(this.pharmacyName).subscribe(
          res=>{
            this.pharmacyParticipations = res[0]
            this.setWinRatio();
          }
        )
      }
    )

    this.tenderService.GetPharmacyMedicineConsumption(this.pharmacyName).subscribe(
      res=>{
        this.medicines = res
        this.setMedicines();
      }
    )
  }

  setMedicines(){
    for(var i = 0; i < this.medicines.length; i++){
      this.medicineNames.push(this.medicines[i].name)
      this.medicineQuantity.push(this.medicines[i].quantity)
    }
  }

  setWinRatio(){
    this.pharmacyWinRatio.push(this.pharmacyWins)
    this.pharmacyWinRatio.push(this.pharmacyParticipations - this.pharmacyWins)
  }

  setPharmacyWinningOffers(winningOffers: TenderEarning[]){
    for(var i = 0; i< winningOffers.length; i++){
      this.winningTenders.push('Tender ' + winningOffers[i].name)
      this.winningMoneyOffers.push(winningOffers[i].earning)
    }
  }

  setPharmacyOffers(offers: TenderEarning[]){
    for(var i = 0; i< offers.length; i++){
      this.tenders.push('Tender ' + offers[i].name)
      this.moneyOffers.push(offers[i].earning)
    }
  }

  extractPharmacyName(url: string): string {
    var splitted = url.split('/', 10);
    var name = splitted[splitted.length-1];
    return name;
  }

  changeEditMode() {
    if(this.editModeOn) {
      this.editModeOn = false;
    } else {
      this.editModeOn = true;
    }
  }

  changeCommentMode() {
    if(this.commentModeOn) {
      this.commentModeOn = false;
    } else {
      this.commentModeOn = true;
    }
  }

  addComment() {
    this.id = this.comments.length + 1;
    this.comment = {
      pharmacyName : this.pharmacyName,
      content : this.commentContent,
      commentDate: new Date };
      console.log(this.comment);
      if(this.commentContent == '') {
        this.toastr.error('You have to fill content!', 'Feedback register');
        return;
      }
      this.service2.addPharmacyComment(this.comment).subscribe(
        (res) => {
          console.log("Successfuly registered to database");
          this.toastr.success('Yourcomment is submitted successfully!', 'Comment register');
        },
        err => {
          console.log(err);
          this.toastr.error('Your comment is not submitted successfully!', 'Comment register');
        }
      );
      location.reload();
  }

  editPharmacy() {
    if(this.pharmacy.address == '' || this.pharmacy.city == '') {
      this.toastr.error('You have to fill all fields!', 'Feedback register');
      return;
    }
    this.changeEditMode();
    this.service.editPharmacy(this.pharmacy).subscribe(
      (res) => {
        console.log("Successfuly registered to database");
        this.toastr.success('You successfully updated pharmacy!', 'Pharmacy Update');
      },
      err => {
        console.log(err);
        this.toastr.error('You haven\'t updated pharmacy!', 'Pharmacy Update');
      }
    );
  }

  onFileSelected(event: Event) {
    console.log(event)
  
  }

  changeUploadMode() {
    if(this.uploadModeOn) {
      this.uploadModeOn = false;
    } else {
      this.uploadModeOn = true;
    }
  }

  loadCurrentPharmacyImage(pharmacyImage: string): void {
    if (pharmacyImage == null) {
      this.currentPharmacyImage = "../../assets/pharmacyImages/default-image.jpg";
      return;
    }
    this.service.getCurrentPharmacyImage(pharmacyImage).subscribe(
      res => {
        this.currentPharmacyImage = this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + res);
        console.log(this.currentPharmacyImage);
      },
      error => {
        console.log(error);
      }
    );
  }

  onUpload() {}

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  
  barChartPlugins = [];

  barChartLabels1: Label[] = ['10.12.2020.','13.12.2020.', '14.12.2020.', '15.12.2020.', '18.12.2020.'];
  barChartData1: ChartDataSets[] = [
    { data: this.moneyOffers, label: 'Ponuda' },
  ];

  barChartLabels2: Label[] = ['Tender1', 'Tender3','Tender6'];
  barChartData2: ChartDataSets[] = [
    { data: this.winningMoneyOffers, label: 'Pobednicka ponuda' },
  ];

  barChartColors: Color[] = [
    {
      backgroundColor: 'rgba(0,255,0,0.28)',
    }
  ]

  doughnutChartType: ChartType = 'doughnut';

  doughnutChartLabels: Label[] = ['Pobeda', 'Učestvovanje'];
  doughnutChartColors: Color[] =[
    {
      backgroundColor: ['lightpink','lightgreen','yellow','lightblue','lightred']
    }
  ]
  doughnutChartData: MultiDataSet = [
    this.pharmacyWinRatio
  ];

  doughnutChartLabels1: Label[] = this.medicineNames
  doughnutChartData1: MultiDataSet = [
    this.medicineQuantity
  ];

  
}
