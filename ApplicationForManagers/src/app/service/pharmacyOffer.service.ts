import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicationSpecificationModel } from '../shared/medicationSpecification.model';
import { PharmacyOfferModel } from '../shared/pharmacyOffer.model';

@Injectable({
  providedIn: 'root'
})
export class PharmacyOfferService{

  pharmacyOffers: PharmacyOfferModel[] = [
    {
        id: 1,
        title: 'First Offer',
        pharmacyName: 'Pharmacy1',
        content: 'New offer',
        startDate: '04.11.2021.',
        endDate: '10.11.2021.',
        posted: false
      }
  ];
  readonly getOffersUrl = "http://localhost:44317/getOffers";
  readonly postOfferUrl = "http://localhost:44317/postOffer";
  
  constructor(private http: HttpClient) { }

  getOffers() : Observable<PharmacyOfferModel[]>{
    return this.http.get<PharmacyOfferModel[]>(this.getOffersUrl);
  }

  postOffer(offer: PharmacyOfferModel){
    return this.http.post(this.postOfferUrl, offer);
  }

}
