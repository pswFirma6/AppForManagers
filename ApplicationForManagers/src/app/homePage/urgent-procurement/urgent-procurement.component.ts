import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pharmacy } from 'src/app/shared/pharmacy';

@Component({
  selector: 'app-urgent-procurement',
  templateUrl: './urgent-procurement.component.html',
  styleUrls: ['./urgent-procurement.component.css']
})
export class UrgentProcurementComponent implements OnInit {
  pharmacies: Pharmacy[] = [
    {
      id: 1,
      name: "Jankovic",
      address: "Bulevar oslobodjenja 30, Novi Sad"
    },
    {
      id: 2,
      name: "Benu",
      address: "Gogoljeva 52, Novi Sad"
    },
    {
      id: 3,
      name: "Zegin",
      address: "Hadzi Ruvimova 5, Novi Sad"
    },
    {
      id: 4,
      name: "Tilia",
      address: "Bulevar oslobodjenja 78, Novi Sad"
    }
  ];

  medicationName: string = "";
  medicationAmoun: string = "";
  

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {}

}
