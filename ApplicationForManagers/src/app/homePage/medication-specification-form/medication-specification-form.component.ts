import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedicationSpecificationService } from 'src/app/service/medicationSpecification.service';

@Component({
  selector: 'app-medication-specification-form',
  templateUrl: './medication-specification-form.component.html',
  styleUrls: ['./medication-specification-form.component.css']
})
export class MedicationSpecificationFormComponent implements OnInit {

  constructor(public service: MedicationSpecificationService) { }
  pharmacies: string[] = [];
  medications: string[] = [];
  medicationsVisible: boolean = false;

  ngOnInit(): void {
    this.service.getPharmacyNames()
    .subscribe(res => this.pharmacies = res);
  }

  onSubmit(form: NgForm){
    console.log('i was here');
    this.service.requestReport()
    .subscribe(res => console.log(res));
  }

  pharmacySelected(value: string) {

    this.service.getMedicationNames(value)
    .subscribe(res => this.medications = res);
    this.medicationsVisible = true;
  }

}
