import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedicineService } from 'src/app/service/medicine.service';
import { PrescriptionService } from 'src/app/service/prescription.service';
import { Medicine } from 'src/app/shared/medicine.model';
import { PharmacyMedicineAvailabilityModel } from 'src/app/shared/pharmacyMedicineAvailability.model';
import { PrescriptionModel } from 'src/app/shared/prescription.model';
import { SendingPrescriptionModel } from 'src/app/shared/sendingPrescription.model';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  prescriptions: PrescriptionModel[] = [];
  medicine: Medicine;
  pharmacies : PharmacyMedicineAvailabilityModel[] = [];
  checkPharmacies: boolean = false;
  isAvailable: boolean = true;
  method: string = "";

  constructor(public service: PrescriptionService, public medicineService: MedicineService) { }

  ngOnInit(): void {
    this.prescriptions = this.service.prescriptions;
  }

  checkAvailability(prescription: PrescriptionModel){
    var quantity: number = +prescription.Quantity;
    var medicine : Medicine = {
      name: prescription.MedicineName,
      quantity: quantity
    }
    this.medicineService.checkMedicine(medicine);
    this.isAvailable = true;
  }

  checkPharmaciesAvailability(form: NgForm){
    this.medicineService.checkMedicine(this.medicine)
      .subscribe((res:any) => {
        this.pharmacies = res;
        this.checkPharmacies = true;
      }
      );
  }

  sendPrescription(prescription: PrescriptionModel){
    var sending: SendingPrescriptionModel = {
      Prescription: prescription,
      Method: this.method
    }
    console.log(sending)
    this.service.sendPrescription(sending).subscribe(
        (res) => {
          window.location.reload();
        }
    )
  }
}