import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Medicine } from "../shared/medicine.model";

@Injectable({
    providedIn: 'root'
  })

export class MedicineService{
  
  baseurl = "http://localhost:44317/checkMedicine";
  constructor(private http: HttpClient) { }

  checkMedicine(medicine: Medicine) {
    return this.http.post(this.baseurl,medicine);  
  }

}