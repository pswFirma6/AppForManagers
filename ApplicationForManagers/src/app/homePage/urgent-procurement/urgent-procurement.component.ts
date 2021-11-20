import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pharmacy } from 'src/app/shared/pharmacy';
import { UrgentProcurementService } from 'src/app/shared/urgent-procurement.service';

@Component({
  selector: 'app-urgent-procurement',
  templateUrl: './urgent-procurement.component.html',
  styleUrls: ['./urgent-procurement.component.css']
})
export class UrgentProcurementComponent implements OnInit {

  _cityFilter: string;
  _addressFilter: string;

  get cityFilter(): string {
    return this._cityFilter;
  }
  set cityFilter(value: string) {
    this._cityFilter = value;
  }
  get addressFilter(): string {
    return this._addressFilter;
  }
  set addressFilter(value: string) {
    this._addressFilter = value;
  }
  
  filteredPharmacies: Pharmacy[];
  pharmacies: Pharmacy[] = [];


  medicationName: string = "";
  medicationAmount: string = "";

  performFilter(filterCity: string, filterAddress: string): Pharmacy[]{
    filterCity = filterCity.toLocaleLowerCase();
    filterAddress = filterAddress.toLocaleLowerCase();
    if(filterAddress.length == 0){
      return this.pharmacies.filter((pharmacy: Pharmacy)=>
      pharmacy.city.toLocaleLowerCase().indexOf(filterCity) !== -1)
    }
    else if(filterCity.length == 0){
      return this.pharmacies.filter((pharmacy: Pharmacy)=>
      pharmacy.address.toLocaleLowerCase().indexOf(filterAddress) !== -1)
    }
    else{
      return this.pharmacies.filter((pharmacy: Pharmacy)=>
      pharmacy.city.toLocaleLowerCase().indexOf(filterCity) !== -1
      && pharmacy.address.toLocaleLowerCase().indexOf(filterAddress) !== -1)
    }
    
  }

  constructor(public service: UrgentProcurementService) { 
    this.filteredPharmacies = this.pharmacies;
  }

  ngOnInit(): void {
      this.service.getPharmacies()
      .subscribe(res => this.pharmacies = res);
      this.service.getPharmacies()
      .subscribe(res => this.filteredPharmacies = res);
  }

  onSubmit(form: NgForm) {
    if(this.addressFilter == null && this.cityFilter == null){
      this.filteredPharmacies = this.pharmacies;
    }
    else{
      this.filteredPharmacies = this.performFilter(this._cityFilter, this._addressFilter);
    }

  }
 
}
