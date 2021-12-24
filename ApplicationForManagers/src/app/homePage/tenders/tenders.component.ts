import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TenderService } from 'src/app/service/tender.service';
import { Tender, TenderOffer, TenderOfferItem} from 'src/app/shared/tender.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.css']
})
export class TendersComponent implements OnInit {

  tenders : Tender[] = [];
  currentTenderId: number;
  tenderOffers: TenderOffer[] =[];
  selectedTenderOffers: TenderOffer[] =[];
  showingTenderOffers: boolean =false;
  closingTender: boolean=false;
  oldDate: string = '1/1/2050 12:00:00 AM'
  constructor(public service: TenderService) { }

  ngOnInit(): void {
    this.service.GetTenders()
    .subscribe(res => this.tenders = res);
    this.GetTenderOffers();
    console.log(this.tenderOffers)
  }

  GetTenderOffers(){
    this.service.GetTenderOffers()
    .subscribe(res => this.tenderOffers = res);
    console.log(this.tenderOffers)
  }

  ShowTenderOffers(tenderId: number){

    this.selectedTenderOffers = [];
    if(this.showingTenderOffers == true && this.currentTenderId == tenderId){
      this.showingTenderOffers = false;
      this.currentTenderId = 0;
      return;
    }
    else{
      for(var offer of this.tenderOffers){
        if(offer.tenderId == tenderId){
          this.selectedTenderOffers.push(offer)
        }
      }
      console.log(this.selectedTenderOffers)
      this.currentTenderId = tenderId;
      this.showingTenderOffers = true;
    }
    
  }

  TotalOfferPrize(offer: TenderOffer){

    let ret = 0
    for(var item of offer.tenderOfferItems){
      ret += item.quantity * item.price;
    }
    return ret;
  }

  ClosingTender(){
    this.closingTender = true;
  }
  CancelClosingTender(){
    this.closingTender = false;
  }
  CloseTender(offer: TenderOffer){
    this.service.CloseTender(offer)
    .subscribe(res => {Swal.fire('Tender closed','You have chosen the winner', 'success').then((result)=>
      location.reload()
    )
    });
  }


}
