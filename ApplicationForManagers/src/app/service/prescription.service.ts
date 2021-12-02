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
      Id: "2",
      MedicineName: "Brufen",
      Quantity: "5",
      Description: "",
      RecommendedDose: "",
      PrescriptionDate: "22.11.2021.",
      DoctorName: "",
      PatientName: "",
      PatientId: "",
      TherapyStart : "",
      TherapyEnd: "",
      Diagnosis: "",
    },
    {
      Id: "1",
      MedicineName: "Andol",
      Quantity: "5",
      Description: "",
      RecommendedDose: "",
      PrescriptionDate: "22.11.2021.",
      DoctorName: "",
      PatientName: "",
      PatientId: "",
      TherapyStart : "",
      TherapyEnd: "",
      Diagnosis: "",
    }
  ];

  readonly sendPrescriptionUrl = "https://localhost:44317/postOffer";
  
  constructor(private http: HttpClient) { }

  sendPrescription(prescription: SendingPrescriptionModel){
    console.log(prescription)
    return this.http.post(this.sendPrescriptionUrl, prescription);
  }

}
