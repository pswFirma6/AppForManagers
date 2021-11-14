import { Component, OnInit } from '@angular/core';
import { PharmacyOfferService } from 'src/app/service/pharmacyOffer.service';
import { PharmacyOfferModel } from 'src/app/shared/pharmacyOffer.model';

@Component({
  selector: 'app-pharmacy-offers',
  templateUrl: './pharmacy-offers.component.html',
  styleUrls: ['./pharmacy-offers.component.css']
})
export class PharmacyOffersComponent implements OnInit {

  offers: PharmacyOfferModel[] = [];

  constructor(public service: PharmacyOfferService) { }

  ngOnInit(): void {
    this.offers = this.service.pharmacyOffers;
  }

  postOffer(offerId: number): void {
    
  }

}
