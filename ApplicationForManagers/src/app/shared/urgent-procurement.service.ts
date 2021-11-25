import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckAvailabilityModel } from './checkAvailability.model';
import { Medicine } from './medicine.model';
import { Pharmacy } from './pharmacy';

@Injectable({
  providedIn: 'root'
})
export class UrgentProcurementService {
 
  pharmacyUrl = "https://localhost:44317/pharmacies";
  checkAvailabilityUrl = "https://localhost:44317/checkPharmacyMedicine";
  orderUrl =  "https://localhost:44317/orderMedicine"
  constructor(private http: HttpClient) { }

  getPharmacies(): Observable<Pharmacy[]> {
    return this.http.get<Pharmacy[]>(this.pharmacyUrl)
  }

  checkMedicine(availability: CheckAvailabilityModel) {
    return this.http.post(this.checkAvailabilityUrl, availability);  
  }

  orderMedicine(availability: CheckAvailabilityModel) {
    return this.http.post(this.orderUrl, availability)
  }

}
