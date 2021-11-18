import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-medication-availability',
  templateUrl: './medication-availability.component.html',
  styleUrls: ['./medication-availability.component.css']
})
export class MedicationAvailabilityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
  }

}
