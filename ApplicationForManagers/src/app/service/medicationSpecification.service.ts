import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicationSpecificationModel } from '../shared/medicationSpecification.model';

@Injectable({
  providedIn: 'root'
})
export class MedicationSpecificationService{

  formFeedback: MedicationSpecificationModel= new MedicationSpecificationModel();
  pharmacyNames: string[] = [];
  medicationNames: string[] = [];
  
  
  constructor(private http: HttpClient) { }

  postLogin(){
  }

  validate(feedbackValid: MedicationSpecificationModel): string{
     return 'Successfull!'
  }

}
