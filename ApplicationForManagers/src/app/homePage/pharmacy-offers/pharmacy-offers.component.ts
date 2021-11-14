import { Component, OnInit } from '@angular/core';
import { PharmacyOfferModel } from 'src/app/shared/pharmacyOffer.model';

@Component({
  selector: 'app-pharmacy-offers',
  templateUrl: './pharmacy-offers.component.html',
  styleUrls: ['./pharmacy-offers.component.css']
})
export class PharmacyOffersComponent implements OnInit {

  offers: PharmacyOfferModel[] = [
    {
      id: 1,
      title: 'First Offer',
      pharmacyName: 'Pharmacy1',
      content: 'New offer',
      startDate: '04.11.2021.',
      endDate: '10.11.2021.'
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
