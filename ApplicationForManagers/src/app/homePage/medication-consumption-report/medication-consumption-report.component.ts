import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedicationConsumptionService } from 'src/app/service/medicationConsumption.service';
import Swal from 'sweetalert2';

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
        

        Swal.fire('New file', 'Medication consumption report created!', 'info')
        .then((result)=>{
          if(result.isConfirmed){
            location.reload();
          }
        })
      });
  }

}
