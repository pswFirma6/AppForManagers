import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrescriptionModel } from '../shared/prescription.model';
import { SendingPrescriptionModel } from '../shared/sendingPrescription.model';

@Injectable({
  providedIn: 'root'
})

export class PrescriptionService{

  prescriptions: PrescriptionModel[] = [
    {
        prescriptionId : "1",
        prescriptionDate: "22.11.2021.",
        pharmacyName: "Pharmacy1",
        medicineName: "Medicine1",
        quantity: 3
    },
    {
        prescriptionId : "2",
        prescriptionDate: "22.11.2021.",
        pharmacyName: "Pharmacy2",
        medicineName: "Medicine2",
        quantity: 6
    }
  ];

  readonly sendPrescriptionUrl = "https://localhost:44317/postOffer";
  
  constructor(private http: HttpClient) { }

  sendPrescription(prescription: SendingPrescriptionModel){
    return this.http.post(this.sendPrescriptionUrl, prescription);
  }

}
