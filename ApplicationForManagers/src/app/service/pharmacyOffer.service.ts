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
  readonly offerBase = "https://https://localhost:44317/notifications";
  
  constructor(private http: HttpClient) { }

  getOffers(): Observable<string[]> {
    return this.http.get<string[]>(this.offerBase);
  }

}
