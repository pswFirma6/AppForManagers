import { Component, OnInit } from '@angular/core';
import { Pharmacy } from 'src/app/shared/pharmacy';
import { PharmacyService } from 'src/app/service/pharmacy.service';
import { UrgentProcurementService } from 'src/app/service/urgent-procurement.service';

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
      .subscribe((res:any) => this.pharmacies = res);
  }

}
