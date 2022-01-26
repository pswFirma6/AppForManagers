import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedicineService } from 'src/app/service/medicine.service';
import { PrescriptionService } from 'src/app/service/prescription.service';
import { Medicine } from 'src/app/shared/medicine.model';
import { PharmacyMedicineAvailabilityModel } from 'src/app/shared/pharmacyMedicineAvailability.model';
import { PrescriptionModel } from 'src/app/shared/prescription.model';
import { SendingPrescriptionModel } from 'src/app/shared/sendingPrescription.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  sendingPrescription: SendingPrescriptionModel = new SendingPrescriptionModel();
  prescriptions: PrescriptionModel[] = [];
  medicine: Medicine = new Medicine();
  prescription: PrescriptionModel = new PrescriptionModel();
  pharmacies : PharmacyMedicineAvailabilityModel[] = [];
  checkPharmacies: boolean = false;
  isAvailable: boolean = true;
  method: string = "";

  constructor(public service: PrescriptionService, public medicineService: MedicineService) { }

  ngOnInit(): void {}

  checkPharmaciesAvailability(form: NgForm){
    this.medicine.name = this.prescription.MedicineName;
    this.medicine.quantity = this.prescription.Quantity;
    this.medicineService.checkMedicine(this.medicine)
      .subscribe((res:any) => {
        var count = 0;
        for(let p of res){
          count = count + 1;
        }
        if(count > 0){
          this.pharmacies = res;
          this.checkPharmacies = true;
        } else {
          window.alert("This medicine is not available in pharmacies");
        }
      }
      );
  }

  sendPrescription(){
    this.service.savePrescription(this.prescription).subscribe(
      (res:any) => {
        window.alert("Prescription is succesfully saved!");
      }
    );

    this.service.sendPrescription(this.prescription).subscribe(
      (res:any) => {
        Swal.fire('New file', 'Prescription is sent to pharmacy!', 'info')
      .then((result)=>{
        if(result.isConfirmed){
          location.reload();
        }
      })
    });
  }
}