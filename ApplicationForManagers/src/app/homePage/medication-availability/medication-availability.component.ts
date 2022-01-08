import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Medicine } from 'src/app/shared/medicine.model';
import { MedicineService } from 'src/app/service/medicine.service';
import { PharmacyMedicineAvailabilityModel } from 'src/app/shared/pharmacyMedicineAvailability.model';

@Component({
  selector: 'app-medication-availability',
  templateUrl: './medication-availability.component.html',
  styleUrls: ['./medication-availability.component.css']
})
export class MedicationAvailabilityComponent implements OnInit {

  exists: boolean = false;
  checked: boolean;
  medicine: Medicine = new Medicine;
  pharmacies: PharmacyMedicineAvailabilityModel[] = [];

  constructor(public service: MedicineService) { }

  ngOnInit(): void {
    this.checked = false;
  }

  onSubmit(form: NgForm){
    this.service.checkMedicine(this.medicine)
      .subscribe((res:any) => {this.pharmacies = res}
      );
    this.checked = true;
  }

}
