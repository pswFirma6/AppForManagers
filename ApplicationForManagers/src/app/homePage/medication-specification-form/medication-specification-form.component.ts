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

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
  }

}
