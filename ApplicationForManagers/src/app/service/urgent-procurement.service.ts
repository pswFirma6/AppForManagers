import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckAvailabilityModel } from '../shared/checkAvailability.model';
import { Medicine } from '../shared/medicine.model';
import { Pharmacy } from '../shared/pharmacy';

@Injectable({
  providedIn: 'root'
})
export class UrgentProcurementService {
 
  pharmacyUrl = "https://localhost:44317/pharmacies";
  checkAvailabilityUrl = "https://localhost:44317/checkPharmacyMedicine";
  urgentProcurementFromPharmacyUrl = "https://localhost:44317/orderMedicine"
  urgentProcurementUrl =  "https://localhost:44392/urgentProcurement"
  constructor(private http: HttpClient) { }

  getPharmacies(): Observable<Pharmacy[]> {
    return this.http.get<Pharmacy[]>(this.pharmacyUrl)
  }

  checkMedicine(availability: CheckAvailabilityModel) {
    return this.http.post(this.checkAvailabilityUrl, availability);  
  }

  // dodavanje u bolnicu
  urgentProcurement(medicine: Medicine) {
    return this.http.post(this.urgentProcurementUrl, medicine);
  }

  // oduzimanje iz apoteke
  urgentProcurementFromPharmacy(availability: CheckAvailabilityModel){
    return this.http.post(this.urgentProcurementFromPharmacyUrl, availability);
  }

}
