import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { MedicationSpecificationService } from 'src/app/service/medicationSpecification.service';
import { NotificationsService } from '../notifications/notifications.service';

@Component({
  selector: 'app-medication-specification-form',
  templateUrl: './medication-specification-form.component.html',
  styleUrls: ['./medication-specification-form.component.css']
})
export class MedicationSpecificationFormComponent implements OnInit {

  constructor(public service: MedicationSpecificationService, public notificationService: NotificationsService) { }
  pharmacies: string[] = [];
  medications: string[] = [];
  medicationsVisible: boolean = false;

  ngOnInit(): void {
    this.service.getPharmacyNames()
    .subscribe(res => this.pharmacies = res);
  }

  onSubmit(form: NgForm){
    this.service.requestReport()
    .subscribe(res => {console.log(res);
    this.notificationService.newNotification.fileName = "specificationMedicineSpecification(" + 
    this.service.formMedicineSpecification.medicationName + ").pdf";
    Swal.fire('New file', 'You have new specification!', 'info')
      .then((result)=>{
        if(result.isConfirmed){
          this.setNotification();
          this.notificationService.saveNotification().subscribe(
            (res:any) =>{
              location.reload();
            }
          )
        }
      })
    });
  }

  pharmacySelected(value: string) {
    this.service.getMedicationNames(value)
    .subscribe(res => {this.medications = res; console.log(this.medications)});
    this.medicationsVisible = true;
  }

  setNotification(){
    this.notificationService.newNotification.title = 'New specification';
    this.notificationService.newNotification.content = "You have new specification in your Integration folder";
    var date = new Date().toUTCString();
    this.notificationService.newNotification.date = new Date(date);
    this.notificationService.newNotification.read = false;
  }

}
