import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedicationConsumptionService } from 'src/app/service/medicationConsumption.service';

@Component({
  selector: 'app-medication-consumption-report',
  templateUrl: './medication-consumption-report.component.html',
  styleUrls: ['./medication-consumption-report.component.css']
})
export class MedicationConsumptionReportComponent implements OnInit {

  constructor(public service: MedicationConsumptionService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.service.generateReport().subscribe(
      (res) => {
        console.log("Successfuly created report");
        //this.resetForm(form);
        //this.toastr.success('Your feedback is submitted successfully!', 'Feedback register');
      },
      err => {console.log(err); }
    );
  }

}
