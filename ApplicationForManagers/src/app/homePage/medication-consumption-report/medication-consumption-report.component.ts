import { Component, OnInit } from '@angular/core';
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

}
