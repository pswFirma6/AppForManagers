import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from 'src/app/service/prescription.service';
import { PrescriptionModel } from 'src/app/shared/prescription.model';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  prescriptions: PrescriptionModel[] = [];
  isAvailable: boolean = false;

  constructor(public service: PrescriptionService) { }

  ngOnInit(): void {
    this.prescriptions = this.service.prescriptions;
  }

}
