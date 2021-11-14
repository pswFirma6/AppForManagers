import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicationSpecificationModel } from '../shared/medicationSpecification.model';
import { MedicationConsumptionReportModel } from '../shared/medicationConsumptionReport.model';

@Injectable({
  providedIn: 'root'
})
export class MedicationConsumptionService{

  formReport: MedicationConsumptionReportModel= new MedicationConsumptionReportModel();
  
  constructor(private http: HttpClient) { }

  validate(feedbackValid: MedicationSpecificationModel): string{
     return 'Successfull!'
  }

}
