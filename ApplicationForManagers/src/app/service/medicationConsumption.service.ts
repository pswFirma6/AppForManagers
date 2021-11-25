import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicationSpecificationModel } from '../shared/medicationSpecification.model';
import { MedicationConsumptionReportModel } from '../shared/medicationConsumptionReport.model';

@Injectable({
  providedIn: 'root'
})
export class MedicationConsumptionService{

  formReport: MedicationConsumptionReportModel = new MedicationConsumptionReportModel();
  readonly baseUrl = "https://localhost:44317/generateReport";
  
  constructor(private http: HttpClient) { }

  generateReport(){
    console.log(this.formReport);
    return this.http.post(this.baseUrl,this.formReport);
  }

}
