import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrescriptionModel } from '../shared/prescription.model';
import { SendingPrescriptionModel } from '../shared/sendingPrescription.model';

@Injectable({
  providedIn: 'root'
})

export class PrescriptionService{

  readonly savePrescriptionUrl = "http://localhost:44392/savePrescription"
  readonly sendPrescriptionUrl = "http://localhost:44317/sendPrescription";
  
  constructor(private http: HttpClient) { }

  savePrescription(prescription : PrescriptionModel){
    return this.http.post(this.savePrescriptionUrl, prescription);
  }

  sendPrescription(prescription: PrescriptionModel){
    console.log(prescription)
    return this.http.post(this.sendPrescriptionUrl, prescription);
  }

}
