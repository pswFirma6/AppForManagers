import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pharmacy } from './pharmacy';

@Injectable({
  providedIn: 'root'
})
export class UrgentProcurementService {
  pharmacyUrl = "https://localhost:44317/pharmacies";
  constructor(private http: HttpClient) { }

  getPharmacies(): Observable<Pharmacy[]> {
    return this.http.get<Pharmacy[]>(this.pharmacyUrl)
  }
}
