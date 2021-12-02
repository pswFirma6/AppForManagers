import { Component, OnInit } from '@angular/core';
import { Pharmacy } from 'src/app/shared/pharmacy';
import { PharmacyService } from 'src/app/shared/pharmacy.service';
import { UrgentProcurementService } from 'src/app/shared/urgent-procurement.service';

@Component({
  selector: 'app-pharmacy-profile',
  templateUrl: './pharmacy-profile.component.html',
  styleUrls: ['./pharmacy-profile.component.css']
})
export class PharmacyProfileComponent implements OnInit {

  pharmacies: Pharmacy[] = [];

  constructor(public service: UrgentProcurementService) { }
  ngOnInit(): void {
    this.service.getPharmacies()
      .subscribe(res => this.pharmacies = res);
  }

}
