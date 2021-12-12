import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicationSpecificationModel } from '../shared/medicationSpecification.model';

@Injectable({
  providedIn: 'root'
})
export class MedicationSpecificationService{

  formMedicineSpecification: MedicationSpecificationModel= new MedicationSpecificationModel();
  readonly basePharmacyNames = "http://localhost:44317/pharmacyNames";
  readonly baseMedicationNames = "http://localhost:44317/medicationNames";
  readonly baseRequestReport = "http://localhost:44317/requestReport";
  pharmacyNames: string[] = [];
  medicationNames: string[] = [];
  
  
  constructor(private http: HttpClient) { }

  validate(feedbackValid: MedicationSpecificationModel): string{
     return 'Successfull!'
  }

  getPharmacyNames(): Observable<string[]>{
    return this.http.get<string[]>(this.basePharmacyNames);
  }

  getMedicationNames(pharmacyName: string): Observable<string[]>{
    return this.http.post<string[]>(this.baseMedicationNames,pharmacyName);
  }

  requestReport(){
    return this.http.post(this.baseRequestReport,this.formMedicineSpecification);
  }
}
